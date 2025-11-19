import {
    Fragment,
    ReactNode
} from "react";
import {
    Sparkle,
    Mail,
    Phone
} from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";

type contactProps = {
    className?: string;
    children?: ReactNode;
};

const Contact = ({ ...props }: contactProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] contact-wrapper`)}
            attributes={{
                id: "kontakt"
            }}>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    <Wrapper className="flex flex-col justify-center items-center">
                        <PageLabel
                        pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                        pageLabelText="Kontakt"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            Kontakt
                        </h2>
                        <p className="mt-4 text-base text-center text-gray-300">
                            Kontaktujte mě a domluvíme realizaci Vašeho webu.
                        </p>
                    </Wrapper>
                    <Wrapper className="mt-4 flex justify-center items-center flex-col md:flex-row gap-4">
                        <Wrapper className="w-full md:w-1/2 p-4 bg-black/30 border border-gray-500 rounded-md">
                            <h3 className="text-xl">
                                Vyplňte kontaktní formulář
                            </h3>
                            <p className="mt-2 pb-4 text-sm text-gray-300 border-b border-gray-500">
                                Vyplněním kontaktního formuláře, Vás kontaktuji nejpozději do 24 hodin.
                            </p>
                            <Wrapper className="flex flex-col gap-4">
                                <Wrapper className="mt-2 flex flex-col gap-2">
                                    <p className="text-base">
                                        Vaše Jméno
                                    </p>
                                    <input
                                    type="text"
                                    autoComplete="off"
                                    spellCheck={false}
                                    placeholder="Jan Novák"
                                    className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                    />
                                </Wrapper>
                                <Wrapper className="mt-2 flex flex-col gap-4">
                                    <p className="text-base">
                                        Váš mail
                                    </p>
                                    <input
                                    type="email"
                                    autoComplete="off"
                                    spellCheck={false}
                                    placeholder="Jan Novák"
                                    className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                    />
                                </Wrapper>
                                <Wrapper className="mt-2 flex flex-col gap-4">
                                    <p className="text-base">
                                        Vaše telefonní číslo (volitelné, pro osobní komunikaci)
                                    </p>
                                    <input
                                    type="text"
                                    autoComplete="off"
                                    spellCheck={false}
                                    placeholder="737 737 737"
                                    className="border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                    />
                                </Wrapper>
                                <Wrapper className="mt-2 flex flex-col gap-4">
                                    <p className="text-base">
                                        Zpráva pro mě
                                    </p>
                                    <textarea
                                    className="h-48 max-h-auto resize-none border border-gray-500 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
                                    placeholder="Napište mi o co se jedná."></textarea>
                                </Wrapper>
                                <button className="bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-base md:text-lg font-black uppercase">
                                    Odesláním, mě kontaktujete
                                </button>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper className="p-4 bg-black/30 border border-gray-500 rounded-md">
                            <h3 className="text-xl">
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
                                    <Link
                                    href={`mailto:info.modernizujme@gmail.com`}
                                    className="text-base text-gray-300 flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                        <Mail />
                                        info.modernizujme@gmail.com
                                    </Link>
                                    <Link
                                    href={`tel:737007626`}
                                    className="text-base text-gray-300 flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]">
                                        <Phone />
                                        +420 737 007 626
                                    </Link>
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
                                href={`mailto:info.modernizujme@gmail.com`}
                                className="w-full text-base flex items-center gap-2 bg-blue-600 px-3 py-2 rounded-md">
                                    <Mail />
                                    Napište mi mail
                                </Link>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Contact;