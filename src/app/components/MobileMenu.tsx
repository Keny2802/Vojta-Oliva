"use client";

import {
    useState,
    useEffect,
    Fragment,
    ReactNode
} from "react";
import {
    FileText,
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
import Powered from "./Powered";
import Year from "./Year";

type mobileMenuProps = {
    className?: string;
    isMobileMenuHidden: boolean;
    setMobileMenuHidden: (isHidden: boolean) => void;
    children?: ReactNode;
};

const MobileMenu = ({ ...props }: mobileMenuProps) => {
    const dynamicYear = new Date().getFullYear();
    const [activeLink, setActiveLink] = useState<string>("");

    useEffect(() => {
        const sections = document.querySelectorAll(".section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const target = entry.target;
                const targetID = target.id;

                if (entry.isIntersecting) {
                    setActiveLink(targetID);
                };
            });
        }, { threshold: 0.5 });

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
        theme
    } = useTheme();

    const {
        className,
        isMobileMenuHidden,
        setMobileMenuHidden,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`
            ${className || ""} ${isMobileMenuHidden ? "translate-x-0" : "-translate-x-full"}
            ${theme === "Dark" ? "bg-gray-800 text-white" : "bg-gray-50 shadow-md"}
            flex flex-col justify-between p-4 fixed top-0 w-64 h-screen transition-transform duration-300 ease-in-out z-50 mobile-menu-wrapper`)}>
                <Wrapper>
                    <Logo className="text-white" />
                    <ul className="mt-4 flex flex-col gap-2 mobile-menu-items-list-wrapper">
                        <Link
                        href={`#portfolio`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "portfolio");
                            setMobileMenuHidden(false);
                        }}
                        className={clsx(`
                        ${activeLink === "portfolio" && "bg-[#171717] text-white px-3 py-2 rounded-md"}
                        transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                            Portfolio
                        </Link>
                        <Link
                        href={`#reference`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "reference");
                            setMobileMenuHidden(false);
                        }}
                        className={clsx(`
                        ${activeLink === "reference" && "bg-[#171717] text-white px-3 py-2 rounded-md"}
                        transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                            Reference
                        </Link>
                        <Link
                        href={`#cenik`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "cenik");
                            setMobileMenuHidden(false);
                        }}
                        className={clsx(`
                        ${activeLink === "cenik" && "bg-[#171717] text-white px-3 py-2 rounded-md"}
                        transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                            Ceník
                        </Link>
                        <Link
                        href={`#faq`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "faq");
                            setMobileMenuHidden(false);
                        }}
                        className={clsx(`
                        ${activeLink === "faq" && "bg-[#171717] text-white px-3 py-2 rounded-md"}
                        transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                            FAQ
                        </Link>
                        <Link
                        href={`#o-mne`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "o-mne");
                            setMobileMenuHidden(false);
                        }}
                        className={clsx(`
                        ${activeLink === "o-mne" && "bg-[#171717] text-white px-3 py-2 rounded-md"}
                        transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                            O mně
                        </Link>
                        <Link
                        href={`#kontakt`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kontakt");
                            setMobileMenuHidden(false);
                        }}
                        className={clsx(`
                        ${activeLink === "kontakt" && "bg-[#171717] text-white px-3 py-2 rounded-md"}
                        transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                            Kontakt
                        </Link>
                    </ul>
                    {
                        theme === "Dark" ? (
                            <Fragment>
                                <Link
                                    href={`/nabidka`}
                                    className="mt-4 flex items-center gap-2 bg-white shadow-md text-black rounded-lg px-3 py-2">
                                    <FileText />
                                    Získat nabídku
                                </Link>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Link
                                    href={`/nabidka`}
                                    className="mt-4 flex items-center gap-2 bg-white shadow-md text-black rounded-lg px-3 py-2">
                                    <FileText />
                                    Získat nabídku
                                </Link>
                            </Fragment>
                        )
                    }
                    {
                        theme === "Dark" ? (
                            <Fragment>
                                <Link
                                    href={`mailto:info@vojtaoliva.cz`}
                                    className="mt-4 flex items-center gap-2 bg-black text-white rounded-lg px-3 py-2">
                                    <Mail />
                                    info@vojtaoliva.cz
                                </Link>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Link
                                    href={`mailto:info@vojtaoliva.cz`}
                                    className="mt-4 flex items-center gap-2 bg-black text-white rounded-lg px-3 py-2">
                                    <Mail />
                                    info@vojtaoliva.cz
                                </Link>
                            </Fragment>
                        )
                    }
                </Wrapper>
                <Wrapper className={clsx(`${theme === "Dark" ? "text-gray-300" : "text-black"}
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

export default MobileMenu;