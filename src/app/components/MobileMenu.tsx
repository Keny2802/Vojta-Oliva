"use client";

import {
    Fragment,
    ReactNode
} from "react";
import {
    FileText
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
    const {
        theme,
        setTheme
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
                    {/* py-2 border-b border-gray-200 */}
                    <Logo className="text-white" />
                    <ul className="mt-4 flex flex-col gap-2 mobile-menu-items-list-wrapper">
                        <Link
                        href={`#portfolio`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "portfolio");
                            setMobileMenuHidden(false);
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            Portfolio
                        </Link>
                        <Link
                        href={`#reference`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "reference");
                            setMobileMenuHidden(false);
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            Reference
                        </Link>
                        <Link
                        href={`#cenik`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "cenik");
                            setMobileMenuHidden(false);
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            Ceník
                        </Link>
                        <Link
                        href={`#faq`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "faq");
                            setMobileMenuHidden(false);
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            FAQ
                        </Link>
                        <Link
                        href={`#o-mne`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "o-mne");
                            setMobileMenuHidden(false);
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            O mně
                        </Link>
                        <Link
                        href={`#kontakt`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kontakt");
                            setMobileMenuHidden(false);
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            Kontakt
                        </Link>
                    </ul>
                    {/* <Link
                    href={`/nabidka`}
                    className="mt-4 flex items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                        <FileText />
                        Získat nabídku
                    </Link> */}
                    {
                        theme === "Dark" ? (
                            <Fragment>
                                <Link
                                    href={`/nabidka`}
                                    className="mt-4 flex items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                                    <FileText />
                                    Získat nabídku
                                </Link>
                            </Fragment>
                        ) : (
                            <Fragment>
                                <Link
                                    href={`/nabidka`}
                                    className="mt-4 flex items-center gap-2 bg-black text-white rounded-lg px-3 py-2">
                                    <FileText />
                                    Získat nabídku
                                </Link>
                            </Fragment>
                        )
                    }
                </Wrapper>
                <Wrapper className="flex flex-col items-center text-sm text-gray-200">
                    <Powered />
                    <Year />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;