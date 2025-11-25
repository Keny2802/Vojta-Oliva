"use client";

import {
    Fragment
} from "react";
import {
    Sun,
    Moon,
    ChevronLeft,
    Sparkle,
    Mail,
    Phone,
} from "lucide-react";
import {
    zodResolver
} from "@hookform/resolvers/zod";
import {
    useForm
} from "react-hook-form";
import {
    ContactFormSchema,
    contactFormProps
} from "../lib/validation";
import {
    useTheme
} from "../context/ThemeContext";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "@/app/components/Wrapper";
import Logo from "../components/Logo";
import PageLabel from "../components/PageLabel";
import Footer from "../components/Footer";

const Page = () => {
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

    const {
        theme,
        setTheme
    } = useTheme();

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
            {/* <Header /> */}
            {/* pt-28 md:pt-18 */}
            <Wrapper className={clsx(`
            min-h-screen
            ${theme === "Dark" ? "border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]" : "bg-gray-50 border-t border-gray-200"}
            `)}>
                <Wrapper className={clsx(`
                ${theme === "Dark" ? "text-gray-500 border-b border-gray-500" : "text-black border-b border-gray-200"}    
                flex justify-between items-center p-4`)}>
                    <Link
                        href={`/`}
                        className="flex gap-1 text-base transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                        <ChevronLeft />
                        Zpátky domů
                    </Link>
                    <Wrapper className="flex items-center gap-2">
                        {
                            theme === "Dark" ? (
                                <Fragment>
                                    <Sun
                                    className="text-white p-1 h-8 w-8 rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black"
                                    onClick={(e) => {
                                        setTheme("Light");
                                    }}
                                    />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Moon
                                    className="text-black p-1 h-8 w-8 rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
                                    onClick={(e) => {
                                        setTheme("Dark");
                                    }}
                                    />
                                </Fragment>
                            )
                        }
                        <Logo />
                    </Wrapper>
                </Wrapper>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    <Wrapper className={clsx(`${theme === "Dark" ? "text-white" : "text-black/90"} flex flex-col justify-center items-center`)}>
                        <PageLabel
                            pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                            pageLabelText="Nabídka"
                            className="text-white"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            Nabídka
                        </h2>
                        <p className="mt-4 text-base text-center">
                            Cenová nabídka mých služeb webového vývoje
                        </p>
                    </Wrapper>
                </Wrapper>
                <Wrapper className="mt-4 p-4 flex justify-center items-center gap-4 flex-col md:flex-row">
                    <Wrapper className={clsx(`
                        ${theme === "Dark" ? "bg-black/30" : "bg-black/90"}
                        w-full md:w-1/2 p-4 border border-gray-500 rounded-md`)}>
                        <h3 className="text-xl text-gray-300">
                            Formulář zaslání nabídky
                        </h3>
                        <p className="mt-2 pb-4 text-sm text-gray-300 border-b border-gray-500">
                            Vyplněním tohoto formuláře získáte podrobnout nabídku.
                        </p>
                        <form
                            onSubmit={handleSubmit(handleContactForm)}
                            className="flex flex-col gap-4 text-gray-500">
                            <Wrapper className="mt-2 flex flex-col gap-2">
                                <p className="text-base">
                                    Vaše jméno
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
                                className="bg-blue-600 text-white w-full rounded-md px-3 py-2 cursor-pointer text-base md:text-lg font-black uppercase">
                                Kontaktujte mě
                            </button>
                        </form>
                    </Wrapper>
                    <Wrapper className={clsx(`
                    ${theme === "Dark" ? "bg-black/30 border border-gray-500" : "border border-gray-200 bg-black/90"}
                    p-4 rounded-md`)}>
                        <h3 className="text-xl text-gray-300">
                            Kontaktní informace
                        </h3>
                        <p className="mt-2 pb-4 text-sm text-gray-300 border-b border-gray-500">
                            Pokud máte jakýkoliv dotaz nebo zájem, kontaktujte mě prosím.
                        </p>
                        <Wrapper className="mt-4">
                            <Wrapper className="flex flex-col gap-3">
                                <p className="text-base text-gray-300">
                                    Vojta Oliva
                                </p>
                                <Wrapper className="text-base text-gray-300 flex items-center gap-2">
                                    <Mail />
                                    <Link
                                        href={`mailto:info.modernizujme@gmail.com`}
                                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                        info.modernizujme@gmail.com
                                    </Link>
                                </Wrapper>
                                <Wrapper className="text-base text-gray-300 flex items-center gap-2">
                                    <Phone />
                                    <Link
                                        href={`tel:737007626`}
                                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                        +420 737 007 626
                                    </Link>
                                </Wrapper>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper className="mt-4 text-gray-300 flex items-center flex-col md:flex-row flex-wrap gap-4">
                            <Link
                                href={`tel:737007626`}
                                className="w-full text-base flex items-center gap-2 bg-blue-600 px-3 py-2 rounded-md">
                                <Phone />
                                Zavolejte mi
                            </Link>
                            <Link
                                href={`mailto:info.modernizujme@gmail.com`}
                                className="w-full text-base flex items-center gap-2 bg-blue-600 px-3 py-2 rounded-md">
                                <Mail />
                                Napište mi mail
                            </Link>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                {/* <Wrapper className=""></Wrapper> */}
            </Wrapper>
            <Footer />
        </Fragment>
    );
};

export default Page;