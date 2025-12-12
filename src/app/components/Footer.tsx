"use client";

import {
    Fragment,
} from "react";
import {
    useTheme
} from "../context/ThemeContext";
import Link from "next/link";
import clsx from "clsx";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import ContactInfo from "./ContactInfo";
import Powered from "./Powered";
import Year from "./Year";

const Footer = () => {
    const {
        theme
    } = useTheme();
    const dynamicYear = new Date().getFullYear();

    return (
        <Fragment>
            <Wrapper
                className="flex flex-col justify-between"
                id="footer">
                <Wrapper
                className={clsx(`px-4 md:px-24 py-4 md:py-16 ${theme === "Dark" ? "border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] text-gray-300" : "bg-gray-50 border-t border-gray-200"}`)}>
                    <Wrapper className="flex justify-between items-center flex-col md:flex-row gap-4 pb-2 border-b border-gray-500">
                        <Logo />
                        <p className="text-sm md:text-base">
                            {/* New Web - Cenově dostupný webový vývoj. */}
                            Vojta Oliva - Cenově dostupný webový vývoj.
                        </p>
                    </Wrapper>
                    <Wrapper className="mt-4 flex justify-between md:flex-row gap-4 pb-4 border-b border-gray-500">
                        <Wrapper>
                            <p className="border-b border-gray-500 pb-1">
                                Navigace
                            </p>
                            <Wrapper className="mt-2 flex flex-col gap-2">
                                <Link
                                    href={`#portfolio`}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, "portfolio");
                                    }}>
                                    Portfolio
                                </Link>
                                <Link
                                    href={`#reference`}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, "reference");
                                    }}>
                                    Reference
                                </Link>
                                <Link
                                    href={`#cenik`}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, "cenik");
                                    }}>
                                    Ceník
                                </Link>
                                <Link
                                    href={`#faq`}
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, "faq");
                                    }}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                    FAQ
                                </Link>
                                <Link
                                    href={`#o-mne`}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, "o-mne");
                                    }}>
                                    O mně
                                </Link>
                                <Link
                                    href={`/#kontakt`}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, "kontakt");
                                    }}>
                                    Kontakt
                                </Link>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper>
                            <p className="border-b border-gray-500 pb-1">
                                Získání nabídky
                            </p>
                            <Wrapper className="mt-2 flex flex-col gap-2">
                                <Link
                                    href={`/nabidka`}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                    Nabídka
                                </Link>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper className="flex justify-start ">
                        <ContactInfo className="mt-4" isFooter={true} />
                    </Wrapper>
                </Wrapper>
                <Wrapper className={clsx(`
                ${theme === "Dark" ? "p-2 md:p-3 lg:p-4 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] text-gray-300 border-t border-gray-500" : "bg-gray-50 text-black border-t border-gray-200"}
                flex flex-col items-center gap-2 md:gap-3 lg:gap-4`)}>
                    <p className="text-sm md:text-[15px] lg:text-base">
                        &copy; {dynamicYear} vojtaoliva.cz. Všechna práva vyhrazena.
                    </p>
                    <Year />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;