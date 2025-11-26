"use client";

import {
    useRef,
    useEffect,
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
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    useTheme
} from "../context/ThemeContext";
import gsap from "gsap";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";
import ContactInfo from "../components/ContactInfo";

type contactProps = {
    className?: string;
    children?: ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

const Contact = ({ ...props }: contactProps) => {
    const sectionTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionTextRef.current) {
            return;
        };

        gsap.from(sectionTextRef.current, {
            opacity: 0,
            y: 40,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionTextRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    const {
        className,
        children
    } = props;

    const {
        theme
    } = useTheme();

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
            <Wrapper className={clsx(`
            ${className || ""}
            ${theme === "Dark" ? "border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]" : "bg-gray-50 border-t border-gray-200"}
            section`)}
                id="kontakt"
            >
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    <Wrapper
                    className={clsx(`${theme === "Dark" ? "text-white" : "text-black/90"} flex flex-col justify-center items-center`)}
                    ref={sectionTextRef}>
                        <PageLabel
                            pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                            pageLabelText="Kontakt"
                            className="text-white"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            7 Kontakt
                        </h2>
                        <p className="mt-4 text-base text-center">
                            Kontaktujte mě a domluvíme realizaci Vašeho webu.
                        </p>
                    </Wrapper>
                    <Wrapper className="mt-4 flex justify-center items-center flex-col md:flex-row gap-4">
                        <Wrapper className={clsx(`
                        ${theme === "Dark" ? "bg-black/30" : "bg-black/90"}
                        w-full md:w-1/2 p-4 border border-gray-500 rounded-md`)}>
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
                                    className="bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-base">
                                    {/* Odesláním, mě kontaktujete */}
                                    Kontaktujte mě
                                </button>
                            </form>
                        </Wrapper>
                        <ContactInfo isFooter={false} />
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;