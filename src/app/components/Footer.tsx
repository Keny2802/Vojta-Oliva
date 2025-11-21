"use client";

import {
    Fragment,
    ReactNode
} from "react";
import Link from "next/link";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import Powered from "./Powered";
import Year from "./Year";

const Footer = () => {
    return (
        <Fragment>
            <Wrapper className="flex flex-col justify-between">
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-gray-300 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] border-t border-gray-500 footer-wrapper">
                    <Wrapper className="flex justify-between items-center flex-col md:flex-row gap-4 pb-2 border-b border-gray-500">
                        <Logo />
                        <p className="text-sm md:text-base">
                            {/* New Web - Cenově dostupný webový vývoj. */}
                            Vojta Oliva - Cenově dostupný webový vývoj.
                        </p>
                    </Wrapper>
                    {/* items-center flex-col */}
                    <Wrapper className="mt-4 pb-2 flex justify-between md:flex-row gap-4">
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
                                href={`#kontakt`}
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
                </Wrapper>
                {/* <Wrapper className="bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] text-gray-300">
                    <Wrapper className="p-8 flex flex-col items-center">
                        <Powered />
                        <Year className="mt-2" />
                    </Wrapper>
                </Wrapper> */}
                <Wrapper className="bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] text-gray-300 p-4 border-t border-gray-500 flex flex-col items-center">
                    <Powered />
                    <Year className="mt-1" />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;