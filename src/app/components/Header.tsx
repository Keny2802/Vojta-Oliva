"use client";

import {
    useState,
    useEffect,
    Fragment,
    ReactNode
} from "react";
import {
    Menu,
    Minus,
    Sun,
    Moon,
    Mail
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
    const [activeLink, setActiveLink] = useState<string>("");

    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target;

                if (entry.isIntersecting) {
                    setActiveLink(target.id);
                };
            });
        }, {
            threshold: 0.5
        });

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, []);
    
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
                                className={clsx(`
                                ${activeLink === "portfolio" && "text-[#14b8a5]"}
                                transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="header-list-item">
                            <Link
                                href={`#reference`}
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "reference");
                                }}
                                className={clsx(`
                                ${activeLink === "reference" && "text-[#14b8a5]"}
                                transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                                Reference
                            </Link>
                        </li>
                        <li className="header-list-item">
                            <Link
                                href={`#cenik`}
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "cenik");
                                }}
                                className={clsx(`
                                ${activeLink === "cenik" && "text-[#14b8a5]"}
                                transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                                Ceník
                            </Link>
                        </li>
                        <li className="header-list-item">
                            <Link
                                href={`#faq`}
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "faq");
                                }}
                                className={clsx(`
                                ${activeLink === "faq" && "text-[#14b8a5]"}
                                transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                                FAQ
                            </Link>
                        </li>
                        {/* <li className="header-list-item">
                            <Link
                                href={`#o-mne`}
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "o-mne");
                                }}
                                className={clsx(`
                                ${activeLink === "o-mne" && "text-[#14b8a5]"}
                                transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                                O mně
                            </Link>
                        </li> */}
                        <li className="header-list-item">
                            <Link
                                href={`#kontakt`}
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "kontakt");
                                }}
                                className={clsx(`
                                ${activeLink === "kontakt" && "text-[#14b8a5]"}
                                transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
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
                                        href="mailto:info@vojtaoliva.cz"
                                        className="hidden md:flex justify-center items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                                        <Mail />
                                        info@vojtaoliva.cz
                                    </Link>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <Link
                                        href="mailto:info@vojtaoliva.cz"
                                        className="hidden md:flex justify-center items-center gap-2 bg-black text-white rounded-lg px-3 py-2">
                                        <Mail />
                                        info@vojtaoliva.cz
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