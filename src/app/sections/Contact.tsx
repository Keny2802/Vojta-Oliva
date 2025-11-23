"use client";

import {
    useState,
    Fragment,
    ReactNode
} from "react";
import {
    useForm
} from "react-hook-form";
import {
    zodResolver
} from "@hookform/resolvers/zod";
import {
    ContactFormSchema,
    contactFormProps
} from "../lib/validation";
import {
    Sparkle,
    Mail,
    Phone
} from "lucide-react";
import {
    useLanguage
} from "../components/LanguageContext";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";
import ContactInfo from "../components/ContactInfo";

type contactProps = {
    className?: string;
    children?: ReactNode;
};

const Contact = ({ ...props }: contactProps) => {
    const {
        className,
        children
    } = props;

    const {
        language,
        setLanguage
    } = useLanguage();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting
        },
        reset
    } = useForm<contactFormProps>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            emailSubject: "",
            emailMessage: ""
        }
    });

    // const handleContactForm = async (contactFormData: contactFormProps) => {
    //     try {
    //         const res = await fetch("/api/contact", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(contactFormData)
    //         });

    //         if (res.ok) {
    //             reset();
    //         };
    //     } catch (catchError) {};
    // };

    const handleContactForm = async (contactFormData: contactFormProps) => {
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contactFormData)
            });

            if (!res.ok) {
                const errorData = await res.json();
                console.error("Chyba při odesílání formuláře:", errorData);
                return;
            }

            console.log("Formulář odeslán!");
            reset();
        } catch (error) {
            console.error("Chyba při odesílání:", error);
        }
    };

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] contact-wrapper`)}
            attributes={{
                id: "kontakt"
            }}>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    {
                        language === "Čeština" && (
                            <Fragment>
                                <Wrapper className="flex flex-col justify-center items-center">
                                    <PageLabel
                                    pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                                    pageLabelText="Kontakt"
                                    />
                                    <h2 className="text-3xl md:text-5xl font-black uppercase">
                                        6 Kontakt
                                    </h2>
                                    <p className="mt-4 text-base text-center text-gray-300">
                                        Kontaktujte mě a domluvíme realizaci Vašeho webu.
                                    </p>
                                </Wrapper>
                                <Wrapper className="mt-4 flex justify-center items-center flex-col md:flex-row gap-4">
                                    <Wrapper className="w-full md:w-1/2 p-4 bg-black/30 border border-gray-500 rounded-md">
                                        <h3 className="text-xl">
                                            Vyplňte kontaktní formulář
                                        </h3>
                                        <p className="mt-2 pb-4 text-sm text-gray-300 border-b border-gray-500">
                                            Vyplněním kontaktního formuláře, Vás kontaktuji nejpozději do 24 hodin.
                                        </p>
                                        <form
                                        onSubmit={handleSubmit(handleContactForm)}
                                        className="flex flex-col gap-4">
                                            <Wrapper className="mt-2 flex flex-col gap-2">
                                                <p className="text-base">
                                                    Vaše Jméno
                                                </p>
                                                <input
                                                {...register("name")}
                                                type="text"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="Jan Novák"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.name && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.name.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Váš mail
                                                </p>
                                                <input
                                                {...register("email")}
                                                type="email"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="jan.novak@seznam.cz"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.email && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.email.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Vaše telefonní číslo (volitelné, pro osobní komunikaci)
                                                </p>
                                                <input
                                                {...register("phone")}
                                                type="text"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="737 737 737"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.phone && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.phone.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Předmět Zprávy (volitelné)
                                                </p>
                                                <input
                                                {...register("emailSubject")}
                                                type="text"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="Předmět Vaší zprávy"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.emailSubject && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.emailSubject.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Zpráva pro mě
                                                </p>
                                                <textarea
                                                {...register("emailMessage")}
                                                className="h-48 max-h-auto resize-none border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                placeholder="Napište mi o co se jedná."></textarea>
                                            </Wrapper>
                                            {
                                                errors.emailMessage && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.emailMessage.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-base md:text-lg font-black uppercase">
                                                {/* Odesláním, mě kontaktujete */}
                                                Kontaktujte mě
                                            </button>
                                        </form>
                                    </Wrapper>
                                    <ContactInfo isFooter={false} />
                                </Wrapper>
                            </Fragment>
                        )
                    }
                    {
                        language === "English" && (
                            <Fragment>
                                <Wrapper className="flex flex-col justify-center items-center">
                                    <PageLabel
                                    pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                                    pageLabelText="Contact"
                                    />
                                    <h2 className="text-3xl md:text-5xl font-black uppercase">
                                        6 Contact
                                    </h2>
                                    <p className="mt-4 text-base text-center text-gray-300">
                                        Contact me and we will arrange the implementation of your website.
                                    </p>
                                </Wrapper>
                                <Wrapper className="mt-4 flex justify-center items-center flex-col md:flex-row gap-4">
                                    <Wrapper className="w-full md:w-1/2 p-4 bg-black/30 border border-gray-500 rounded-md">
                                        <h3 className="text-xl">
                                            Fill out the contact form
                                        </h3>
                                        <p className="mt-2 pb-4 text-sm text-gray-300 border-b border-gray-500">
                                            By filling out the contact form, I will contact you within 24 hours.
                                        </p>
                                        <form
                                        onSubmit={handleSubmit(handleContactForm)}
                                        className="flex flex-col gap-4">
                                            <Wrapper className="mt-2 flex flex-col gap-2">
                                                <p className="text-base">
                                                    Your Name
                                                </p>
                                                <input
                                                {...register("name")}
                                                type="text"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="Evan Spiegel"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.name && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.name.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Your email
                                                </p>
                                                <input
                                                {...register("email")}
                                                type="email"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="evan.spiegel@evanspiegeů.com"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.email && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.email.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Your phone number (optional, for personal communication)
                                                </p>
                                                <input
                                                {...register("phone")}
                                                type="text"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="+1 1234567890"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.phone && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.phone.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Message Subject (optional)
                                                </p>
                                                <input
                                                {...register("emailSubject")}
                                                type="text"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="Your message subject"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.emailSubject && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.emailSubject.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Message for me
                                                </p>
                                                <textarea
                                                {...register("emailMessage")}
                                                className="h-48 max-h-auto resize-none border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                placeholder="Write to me, what is it about."></textarea>
                                            </Wrapper>
                                            {
                                                errors.emailMessage && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.emailMessage.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-base md:text-lg font-black uppercase">
                                                {/* Odesláním, mě kontaktujete */}
                                                Contact me
                                            </button>
                                        </form>
                                    </Wrapper>
                                    <ContactInfo isFooter={false} />
                                </Wrapper>
                            </Fragment>
                        )
                    }
                    {
                        language === "Deutsch" && (
                            <Fragment>
                                <Wrapper className="flex flex-col justify-center items-center">
                                    <PageLabel
                                    pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                                    pageLabelText="Kontakt"
                                    />
                                    <h2 className="text-3xl md:text-5xl font-black uppercase">
                                        6 Kontakt
                                    </h2>
                                    <p className="mt-4 text-base text-center text-gray-300">
                                        Nehmen Sie Kontakt mit mir auf, um Ihre Webadresse zu implementieren.
                                    </p>
                                </Wrapper>
                                <Wrapper className="mt-4 flex justify-center items-center flex-col md:flex-row gap-4">
                                    <Wrapper className="w-full md:w-1/2 p-4 bg-black/30 border border-gray-500 rounded-md">
                                        <h3 className="text-xl">
                                            Füllen Sie das Kontaktformular aus.
                                        </h3>
                                        <p className="mt-2 pb-4 text-sm text-gray-300 border-b border-gray-500">
                                            Wenn Sie das Kontaktformular ausfüllen, werde ich mich innerhalb von 24 Stunden bei Ihnen melden.
                                        </p>
                                        <form
                                        onSubmit={handleSubmit(handleContactForm)}
                                        className="flex flex-col gap-4">
                                            <Wrapper className="mt-2 flex flex-col gap-2">
                                                <p className="text-base">
                                                    Ihr Name
                                                </p>
                                                <input
                                                {...register("name")}
                                                type="text"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="Evan Spiegel"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.name && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.name.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Ihre mail
                                                </p>
                                                <input
                                                {...register("email")}
                                                type="email"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="evan.spiegel@evanspiegeů.com"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.email && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.email.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Ihre Telefonnummer (optional, für die persönliche Kommunikation)
                                                </p>
                                                <input
                                                {...register("phone")}
                                                type="text"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="+49 30 1234 5678"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.phone && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.phone.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Betreff der Nachricht (optional)
                                                </p>
                                                <input
                                                {...register("emailSubject")}
                                                type="text"
                                                autoComplete="off"
                                                spellCheck={false}
                                                placeholder="Ihr Nachrichtenbetreff"
                                                className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                />
                                            </Wrapper>
                                            {
                                                errors.emailSubject && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.emailSubject.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <Wrapper className="mt-2 flex flex-col gap-4">
                                                <p className="text-base">
                                                    Nachricht für mich
                                                </p>
                                                <textarea
                                                {...register("emailMessage")}
                                                className="h-48 max-h-auto resize-none border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                                placeholder="Schreib mir, worum geht es?"></textarea>
                                            </Wrapper>
                                            {
                                                errors.emailMessage && (
                                                    <Fragment>
                                                        <p className="text-sm text-red-400">
                                                            {errors.emailMessage.message}
                                                        </p>
                                                    </Fragment>
                                                )
                                            }
                                            <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-base md:text-lg font-black uppercase">
                                                {/* Odesláním, mě kontaktujete */}
                                                Kontaktieren Sie mich
                                            </button>
                                        </form>
                                    </Wrapper>
                                    <ContactInfo isFooter={false} />
                                </Wrapper>
                            </Fragment>
                        )
                    }
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;