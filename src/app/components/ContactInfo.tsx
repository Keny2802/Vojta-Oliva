import {
    Fragment,
    ReactNode
} from "react";
import {
    Mail,
    Phone
} from "lucide-react";
import {
    useTheme
} from "../context/ThemeContext";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type contactInfoProps = {
    className?: string;
    isFooter: boolean;
    children?: ReactNode;
};

const ContactInfo = ({ ...props }: contactInfoProps) => {
    const {
        className,
        isFooter,
        children
    } = props;

    const {
        theme
    } = useTheme();

    return (
        <Fragment>
            <Wrapper className={clsx(`
                ${className}
                ${isFooter && "w-full"}
                ${!isFooter && "w-full md:w-max"}
                ${theme === "Dark" ? "bg-black/30 border border-gray-500" : "border border-gray-200 bg-black/90"}
                text-gray-300 p-4 rounded-md`)}>
                <h3 className="text-xl">
                    Kontaktní informace
                </h3>
                <p className="mt-2 pb-4 text-sm border-b border-gray-500">
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
                                href={`mailto:info@vojtaoliva.cz`}
                                className="transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                info@vojtaoliva.cz
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
                <Wrapper className="mt-4 flex items-center flex-col md:flex-row gap-4">
                    <Link
                        href={`tel:737007626`}
                        className="w-full text-base flex items-center gap-2 bg-blue-600 px-3 py-2 rounded-md">
                        <Phone />
                        Zavolejte mi
                    </Link>
                    <Link
                        href={`mailto:info@vojtaoliva.cz`}
                        className="w-full text-base flex items-center gap-2 bg-blue-600 px-3 py-2 rounded-md">
                        <Mail />
                        Napište mi mail
                    </Link>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default ContactInfo;