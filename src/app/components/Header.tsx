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
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} w-full fixed z-50 bg-gray-800 text-white p-4 header-wrapper`)}>
                <Wrapper className="flex justify-between items-center gap-4 md:gap-2">
                    <Logo />
                    <ul className="hidden md:flex items-center gap-4 header-item-list-wrapper">
                        <Link
                        href={`#portfolio`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "portfolio");
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            Portfolio
                        </Link>
                        <Link
                        href={`#reference`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "reference");
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            Reference
                        </Link>
                        <Link
                        href={`#cenik`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "cenik");
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
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
                        onClick={(e) => {
                            setLinkWithoutHash(e, "o-mne");
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            O mně
                        </Link>
                        <Link
                        href={`#kontakt`}
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kontakt");
                        }}
                        className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                            Kontakt
                        </Link>
                    </ul>
                    <Wrapper className="flex items-center gap-4 header-right-wrapper">
                        <Sun className="cursor-pointer" />
                        <Link
                        href={`/nabidka`}
                        className="hidden md:flex justify-center items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                            <FileText />
                            Získat nabídku
                        </Link>
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