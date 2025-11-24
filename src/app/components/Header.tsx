"use client";

import {
    useState,
    Fragment,
    ReactNode
} from "react";
import {
    FileText,
    Menu,
    Minus,
    Sun,
    Moon
} from "lucide-react";
import {
    czechLanguageSwitchSet
} from "../sets/czechLanguageSwitchSet";
import {
    englishLanguageSwitchSet
} from "../sets/englishLanguageSwitchSet";
import {
    deutschLanguageSwitchSet
} from "../sets/deutschLanguageSwitchSet";
import clsx from "clsx";
import Link from "next/link";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import { useLanguage } from "./LanguageContext";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

type headerProps = {
    className?: string;
    children?: ReactNode;
};

const Header = ({ ...props }: headerProps) => {
    const [isMobileMenuHidden, setMobileMenuHidden] = useState<boolean>(false);
    const [isCzechSwitcherClicked, setCzechSwitcherClicked] = useState<boolean>(false);
    // const [languageSwitcherState, setLanguageSwitcherState] = useState<"Čeština" | "English" | "Deutsch">("Čeština");
    // const { language } = useLanguage();

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} w-full fixed z-50 bg-gray-800 text-white px-2 header-wrapper`)}>
                <Wrapper className="flex justify-between items-center gap-4 md:gap-2">
                    <Logo />
                    <ul className="hidden md:flex items-center gap-4 header-item-list-wrapper">
                        {/* {
                            language === "Čeština" && (czechLanguageSwitchSet.map((language, languageIndex) => (
                            language.links.map((link, linkIndex) => (
                                <Fragment key={linkIndex}>
                                    <Link
                                    href={`#${link.linkHref}`}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, `${link.linkHref}`);
                                    }}
                                    >
                                        {link.linkText}
                                    </Link>
                                </Fragment>
                            ))
                            )))
                        }
                        {
                            language === "English" && (englishLanguageSwitchSet.map((language, languageIndex) => (
                            language.links.map((link, linkIndex) => (
                                <Fragment key={linkIndex}>
                                    <Link
                                    href={`#${link.linkHref}`}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, `${link.linkHref}`);
                                    }}
                                    >
                                        {link.linkText}
                                    </Link>
                                </Fragment>
                            ))
                            )))
                        }
                        {
                            language === "Deutsch" && (deutschLanguageSwitchSet.map((language, languageIndex) => (
                            language.links.map((link, linkIndex) => (
                                <Fragment key={linkIndex}>
                                    <Link
                                    href={`#${link.linkHref}`}
                                    className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, `${link.linkHref}`);
                                    }}
                                    >
                                        {link.linkText}
                                    </Link>
                                </Fragment>
                            ))
                            )))
                        } */}
                        <li className="header-list-item">
                            <Link
                            href={`#portfolio`}
                            onClick={(e) => {
                                setLinkWithoutHash(e, "portfolio");
                            }}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Portfolio
                            </Link>
                        </li>
                        <li className="header-list-item">
                            <Link
                            href={`#reference`}
                            onClick={(e) => {
                                setLinkWithoutHash(e, "reference");
                            }}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Reference
                            </Link>
                        </li>
                        <li className="header-list-item">
                            <Link
                            href={`#cenik`}
                            onClick={(e) => {
                                setLinkWithoutHash(e, "cenik");
                            }}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Ceník
                            </Link>
                        </li>
                        <li className="header-list-item">
                            <Link
                            href={`/#faq`}
                            onClick={(e) => {
                                setLinkWithoutHash(e, "faq");
                            }}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                FAQ
                            </Link>
                        </li>
                        <li className="header-list-item">
                            <Link
                            href={`#o-mne`}
                            onClick={(e) => {
                                setLinkWithoutHash(e, "o-mne");
                            }}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                O mně
                            </Link>
                        </li>
                        <li className="header-list-item">
                            <Link
                            href={`#kontakt`}
                            onClick={(e) => {
                                setLinkWithoutHash(e, "kontakt");
                            }}
                            className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                    <Wrapper className="flex items-center gap-4 header-right-wrapper">
                        {/* <LanguageSwitcher
                        className="right-56 hidden md:flex" /> */}
                        <Sun className="cursor-pointer" />
                        {/* <LanguageSwitcher className="hidden md:flex" /> */}
                        <Link
                        href={`/nabidka`}
                        className="hidden md:flex justify-center items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                            <FileText />
                            Získat nabídku
                        </Link>
                        {/* {
                            language === "Čeština" && (
                                <Fragment>
                                    <Link
                                    href={`/nabidka`}
                                    className="hidden md:flex justify-center items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                                        <FileText />
                                        Získat nabídku
                                    </Link>
                                </Fragment>
                            )
                        }
                        {
                            language === "English" && (
                                <Fragment>
                                    <Link
                                    href={`/nabidka`}
                                    className="hidden md:flex justify-center items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                                        <FileText />
                                        Get offer
                                    </Link>
                                </Fragment>
                            )
                        }
                        {
                            language === "Deutsch" && (
                                <Fragment>
                                    <Link
                                    href={`/nabidka`}
                                    className="hidden md:flex justify-center items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                                        <FileText />
                                        Angebote
                                    </Link>
                                </Fragment>
                            )
                        } */}
                        {/* <LanguageSwitcher className="hidden md:flex" /> */}
                        {/* <LanguageSwitcher /> */}
                        {
                            isMobileMenuHidden ? (
                                <Fragment>
                                    <Minus
                                    className="md:hidden cursor-pointer"
                                    onClick={(e) => {
                                        setMobileMenuHidden(false);
                                    }}
                                    />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Menu
                                    className="md:hidden cursor-pointer"
                                    onClick={(e) => {
                                        setMobileMenuHidden(true);
                                    }}
                                    />
                                </Fragment>
                            )
                        }
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            {/* <MobileMenu
            isMobileMenuHidden={isMobileMenuHidden}
            setMobileMenuHidden={setMobileMenuHidden}
            /> */}
            <MobileMenu
            isMobileMenuHidden={isMobileMenuHidden}
            setMobileMenuHidden={setMobileMenuHidden}
            // languageSwitcherState={languageSwitcherState}
            // setLanguageSwitcherState={setLanguageSwitcherState}
            />
        </Fragment>
    );
};

export default Header;