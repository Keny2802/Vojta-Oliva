"use client";

import {
    Fragment,
    ReactNode
} from "react";
import {
    FileText,
    Phone,
    CheckCircle,
    Home
} from "lucide-react";
import {
    useLanguage
} from "../components/LanguageContext";
import clsx from "clsx";
import Link from "next/link";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "../components/Wrapper";
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import PageLabel from "../components/PageLabel";

type heroProps = {
    className?: string;
    children?: ReactNode;
};

const Hero = ({ ...props }: heroProps) => {
    const {
        language,
        setLanguage
    } = useLanguage();

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} pt-28 md:pt-18 flex flex-col justify-center w-full min-h-screen bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] hero-wrapper`)}>
                <HeroOverlayWrapper className="p-4">
                    {
                        language === "Čeština" && (
                            <Fragment>
                                <PageLabel
                                pageLabelAdditContent={<Home />}
                                pageLabelText="Domovská stránka"
                                />
                            <h1 className="text-3xl md:text-6xl font-black hero-text">
                                Nakopni svůj web jen a pouze s
                                {" "}
                                <span className="bg-linear-to-r from-[#0d3c7a] via-[#4022a1] to-[#6a1fcc] text-transparent bg-clip-text">
                                    {/* new Web */}
                                    Vojtou Olivou
                                </span>,
                                {" "}
                                cenově dostupný webový vývoj.
                            </h1>
                            <p className="mt-4 p-4 text-lg md:text-2xl text-gray-200 max-w-3xl">
                                Poskytuji webový vývoj jednotlivcům a malým podnikům růst a získávat nové klienty.
                            </p>
                            <Wrapper className="w-full mt-4 p-4 flex justify-center items-center gap-4 flex-col md:flex-row">
                                <Link
                                    href={`/nabidka`}
                                    className="w-full md:w-max flex justify-center md:justify-start items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                                    <FileText />
                                    Získat nabídku
                                </Link>
                                <Link
                                    href={`#kontakt`}
                                    className="w-full md:w-max flex justify-center md:justify-start items-center gap-2 bg-gray-800 rounded-lg px-3 py-2"
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, "kontakt")
                                    }}>
                                    <Phone />
                                    Kontaktujte mě
                                </Link>
                            </Wrapper>
                            {/* grid grid-cols-2 lg:grid-cols-6 gap-4 */}
                            <Wrapper className="mt-4 grid grid-cols-2 md:flex md:justify-between items-center gap-8 flex-col md:flex-row">
                                <Wrapper className="flex flex-col items-center gap-1">
                                    <CheckCircle className="h-12 w-12 text-green-500" />
                                    <p className="text-[15.5px]">
                                        Výborné ceny
                                    </p>
                                    <p className="text-sm text-gray-200">
                                        5.000 - 15.000 Kč
                                    </p>
                                </Wrapper>
                                <Wrapper className="flex flex-col items-center gap-1">
                                    <CheckCircle className="h-12 w-12 text-green-500" />
                                    <p className="text-[15.5px]">
                                        Rychlé dodání
                                    </p>
                                    <p className="text-sm text-gray-200">
                                        1.5 - 3 týdny
                                    </p>
                                </Wrapper>
                                <Wrapper className="flex flex-col items-center gap-1">
                                    <CheckCircle className="h-12 w-12 text-green-500" />
                                    <p className="text-[15.5px]">
                                        Rychlá komunikace
                                    </p>
                                    <p className="text-sm text-gray-200">
                                        To je samozřejmostí
                                    </p>
                                </Wrapper>
                                <Wrapper className="flex flex-col items-center gap-1">
                                    <CheckCircle className="h-12 w-12 text-green-500" />
                                    <p className="text-[15.5px]">
                                        Více návrhů
                                    </p>
                                    <p className="text-sm text-gray-200">
                                        Ano, více návrhů v ceně.
                                    </p>
                                </Wrapper>
                            </Wrapper>
                            </Fragment>
                        )
                    }
                    {
                        language === "English" && (
                            <Fragment>
                                <PageLabel
                                    pageLabelAdditContent={<Home />}
                                    pageLabelText="Homepage"
                                />
                                <h1 className="text-3xl md:text-6xl font-black hero-text">
                                    Push your website to another dimension with
                                    {" "}
                                    <span className="bg-linear-to-r from-[#0d3c7a] via-[#4022a1] to-[#6a1fcc] text-transparent bg-clip-text">
                                        {/* new Web */}
                                        Vojta Oliva
                                    </span>,
                                    {" "}
                                    very good web development prices.
                                </h1>
                                <p className="mt-4 p-4 text-lg md:text-2xl text-gray-200 max-w-3xl">
                                    I provide web development services to the individuals and small bussiness to grow and gain new clients.
                                </p>
                                <Wrapper className="w-full mt-4 p-4 flex justify-center items-center gap-4 flex-col md:flex-row">
                                    <Link
                                        href={`/nabidka`}
                                        className="w-full md:w-max flex justify-center md:justify-start items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                                        <FileText />
                                        Get offer
                                    </Link>
                                    <Link
                                        href={`#kontakt`}
                                        className="w-full md:w-max flex justify-center md:justify-start items-center gap-2 bg-gray-800 rounded-lg px-3 py-2"
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, "kontakt")
                                        }}>
                                        <Phone />
                                        Contact me
                                    </Link>
                                </Wrapper>
                                {/* grid grid-cols-2 lg:grid-cols-6 gap-4 */}
                                <Wrapper className="mt-4 grid grid-cols-2 md:flex md:justify-between items-center gap-8 flex-col md:flex-row">
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-500" />
                                        <p className="text-[15.5px]">
                                            Great prices
                                        </p>
                                        <p className="text-sm text-gray-200">
                                            {/* 5.000 - 15.000 Kč */}
                                            237.8 - 713.4 $
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-500" />
                                        <p className="text-[15.5px]">
                                            Fast delivery
                                        </p>
                                        <p className="text-sm text-gray-200">
                                            1.5 - 3 weeks
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-500" />
                                        <p className="text-[15.5px]">
                                            Quick communication
                                        </p>
                                        <p className="text-sm text-gray-200">
                                            Without a question.
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-500" />
                                        <p className="text-[15.5px]">
                                            More suggestions
                                        </p>
                                        <p className="text-sm text-gray-200">
                                            Yes, more suggestions included in price.
                                        </p>
                                    </Wrapper>
                                </Wrapper>
                            </Fragment>
                        )
                    }
                    {
                        language === "Deutsch" && (
                            <Fragment>
                                <PageLabel
                                    pageLabelAdditContent={<Home />}
                                    pageLabelText="Homepage"
                                />
                                <h1 className="text-3xl md:text-6xl font-black hero-text">
                                    Bringen Sie Ihre Website auf ein neues Level mit
                                    {" "}
                                    <span className="bg-linear-to-r from-[#0d3c7a] via-[#4022a1] to-[#6a1fcc] text-transparent bg-clip-text">
                                        {/* new Web */}
                                        Vojta Oliva
                                    </span>,
                                    {" "}
                                    sehr gute Preise für Webentwicklung.
                                </h1>
                                <p className="mt-4 p-4 text-lg md:text-2xl text-gray-200 max-w-3xl">
                                    Ich biete Webentwicklungsdienstleistungen für Einzelpersonen und kleine Unternehmen an, um deren Wachstum und die Gewinnung neuer Kunden zu fördern.
                                </p>
                                <Wrapper className="w-full mt-4 p-4 flex justify-center items-center gap-4 flex-col md:flex-row">
                                    <Link
                                        href={`/nabidka`}
                                        className="w-full md:w-max flex justify-center md:justify-start items-center gap-2 bg-white text-black rounded-lg px-3 py-2">
                                        <FileText />
                                        Angebot einholen
                                    </Link>
                                    <Link
                                        href={`#kontakt`}
                                        className="w-full md:w-max flex justify-center md:justify-start items-center gap-2 bg-gray-800 rounded-lg px-3 py-2"
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, "kontakt")
                                        }}>
                                        <Phone />
                                        Kontaktieren Sie mich
                                    </Link>
                                </Wrapper>
                                {/* grid grid-cols-2 lg:grid-cols-6 gap-4 */}
                                <Wrapper className="mt-4 grid grid-cols-2 md:flex md:justify-between items-center gap-8 flex-col md:flex-row">
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-500" />
                                        <p className="text-[15.5px]">
                                            Tolle Preis
                                        </p>
                                        <p className="text-sm text-gray-200">
                                            {/* 5.000 - 15.000 Kč */}
                                            206.51 - 619.52 EURO
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-500" />
                                        <p className="text-[15.5px]">
                                            Schnelle Lieferung
                                        </p>
                                        <p className="text-sm text-gray-200">
                                            1.5 - 3 Wochen
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-500" />
                                        <p className="text-[15.5px]">
                                            Schnelle Kommunikation
                                        </p>
                                        <p className="text-sm text-gray-200">
                                            Weitere Vörschlage.
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-500" />
                                        <p className="text-[15.5px]">
                                            Weitere Vörschlage
                                        </p>
                                        <p className="text-sm text-gray-200">
                                            Ja, weitere Vörschlage im Preis inbegriffen.
                                        </p>
                                    </Wrapper>
                                </Wrapper>
                            </Fragment>
                        )
                    }
                </HeroOverlayWrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Hero;