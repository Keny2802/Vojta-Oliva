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
    useTheme
} from "../context/ThemeContext";
import clsx from "clsx";
import Link from "next/link";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "./Wrapper";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

type headerProps = {
    className?: string;
    children?: ReactNode;
};

const Header = ({ ...props }: headerProps) => {
    const [isMobileMenuHidden, setMobileMenuHidden] = useState<boolean>(false);
    
    const {
        theme,
        setTheme
    } = useTheme();

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`
                ${className || ""}
                ${theme === "Dark" ? "bg-gray-800 text-white px-2" : "bg-gray-50 shadow-md text-black pl-0 pr-2"}
                w-full fixed z-50 header-wrapper`)}>
                <Wrapper className="flex justify-between items-center gap-4 md:gap-2">
                    <Logo imageClassName="rounded-none" />
                    <ul className="hidden md:flex items-center gap-4 header-item-list-wrapper">
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
                        {
                            theme === "Dark" ? (
                                <Fragment>
                                    <Sun
                                    className="p-1 h-8 w-8 rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black"
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
                        {
                            theme === "Dark" ? (
                                <Fragment>
                                    <Link
                                        // href={`/nabidka`}
                                        href="mailto:info.modernizujme@gmail.com"
                                        className="hidden md:flex justify-center items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                                        <FileText />
                                        {/* Získat nabídku */}
                                        info.modernizujme@gmail.com
                                    </Link>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Link
                                        href={`/nabidka`}
                                        className="hidden md:flex justify-center items-center gap-2 bg-black text-white rounded-lg px-3 py-2">
                                        <FileText />
                                        Získat nabídku
                                    </Link>
                                </Fragment>
                            )
                        }
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
            <MobileMenu
            isMobileMenuHidden={isMobileMenuHidden}
            setMobileMenuHidden={setMobileMenuHidden}
            />
        </Fragment>
    );
};

export default Header;