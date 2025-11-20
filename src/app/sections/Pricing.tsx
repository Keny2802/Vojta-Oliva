"use client";

import {
    useState,
    Fragment,
    ReactNode
} from "react";
import {
    Sparkle,
    CheckCircle,
    MonitorCloud
} from "lucide-react";
import clsx from "clsx";
import pricingOptionsSet from "../sets/pricingOptionsSet";
import pricingCardsSet from "../sets/pricingCardsSet";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";
import HelpHint from "../components/HelpHint";

type pricingProps = {
    className?: string;
    children?: ReactNode;
};

const Pricing = ({ ...props }: pricingProps) => {
    const [selectedService, setSelectService] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [addedService, addService] = useState<number[]>([]);
    const [activePricingTab, setActivePricingTab] = useState<"Malý web" | "Střední web" | "Velký web">("Malý web");
    // const [addedService, addService] = useState([{
    //     index: 0,
    //     name: "",
    //     price: 0,
    //     description: "",
    //     howLongItTakes: 0 || ""
    // }]);

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper
            className={clsx(`${className || ""} border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] pricing-wrapper`)}
            attributes={{
                id: "cenik"
            }}>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    <Wrapper className="flex flex-col justify-center items-center">
                        <PageLabel
                        pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                        pageLabelText="Ceník"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            3 Ceník
                        </h2>
                        <p className="mt-4 text-base text-center text-gray-300">
                            Ceník, který je dostupný opravdu pro všechny, jak pro jednotlivce tak pro malé firmy.
                        </p>
                    </Wrapper>
                    <Wrapper className="pricing-wrapper">
                        <Wrapper className="my-4 flex justify-center items-center gap-4 flex-wrap">
                            <button
                            className={clsx(`${activePricingTab === "Malý web" ? "bg-blue-600" : "bg-black/30"} bg-black/30 px-3 py-2 rounded-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105`)}
                            onClick={(e) => {
                                setActivePricingTab("Malý web");
                            }}>
                                Malý web
                            </button>
                            <button
                            className={clsx(`${activePricingTab === "Střední web" ? "bg-blue-600" : "bg-black/30"} bg-black/30 px-3 py-2 rounded-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105`)}
                            onClick={(e) => {
                                setActivePricingTab("Střední web");
                            }}>
                                Střední web
                            </button>
                            <button
                            className={clsx(`${activePricingTab === "Velký web" ? "bg-blue-600" : "bg-black/30"} bg-black/30 px-3 py-2 rounded-md cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105`)}
                            onClick={(e) => {
                                setActivePricingTab("Velký web");
                            }}>
                                Velký web
                            </button>
                        </Wrapper>
                    {/* udělat komponenty na form group form field form wrapper a další */}
                    {/* items-center */}
                        <Wrapper className="mt-4 flex justify-center gap-4 flex-col md:flex-row prices-wrapper">
                            {/* {
                                pricingCardsSet.map((pricingCard, pricingCardIndex) => (
                                    <Fragment key={pricingCardIndex}>
                                        <Wrapper className="p-4 w-full md:max-w-[500px] bg-black/30 border border-gray-500 rounded-md price-wrapper">
                                            <Wrapper className="upper-content-wrapper">
                                                <Wrapper className="flex justify-between items-center">
                                                    <p className="p-1 text-base md:text-xl font-black uppercase">
                                                        {pricingCard.cardHeading}
                                                    </p>
                                                    <span className="text-base md:text-xl font-black price">
                                                        {pricingCard.cardPrice} Kč
                                                    </span>
                                                </Wrapper>
                                                <p className="pb-2 mt-2 text-center text-sm text-gray-500 border-b border-gray-500">
                                                    {pricingCard.cardSubheading}
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="mt-4 flex justify-center items-center gap-2">
                                                <MonitorCloud />
                                                <p className="text-lg text-gray-200 font-black">
                                                    Co tato služba obsahuje?
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="mt-2 flex flex-col gap-2">
                                                {
                                                    pricingCard.cardIncludingSet.map((cardIncluding, cardIncludingIndex) => (
                                                        <Fragment key={cardIncludingIndex}>
                                                            <Wrapper className="flex items-center gap-2">
                                                                <CheckCircle className="text-green-500" />
                                                                <p className="text-base text-gray-200">
                                                                    {cardIncluding}
                                                                </p>
                                                            </Wrapper>
                                                        </Fragment>
                                                    ))
                                                }
                                            </Wrapper>
                                            <Link
                                            href={`#kontakt`}
                                            className="block mt-4 bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-center text-base md:text-lg font-black uppercase"
                                            onClick={(e) => {
                                                setLinkWithoutHash(e, "kontakt");
                                            }}>
                                                Chci tuto službu
                                            </Link>
                                        </Wrapper>
                                    </Fragment>
                                ))
                            } */}
                            {activePricingTab === "Malý web" ? (
                                <Fragment>
                                    <Wrapper className="p-4 w-full md:max-w-[500px] bg-black/30 border border-gray-500 rounded-md price-wrapper">
                                        <Wrapper className="upper-content-wrapper">
                                            <Wrapper className="flex justify-between items-center">
                                                <p className="p-1 text-base md:text-xl font-black uppercase">
                                                        Pro živnostníky
                                                </p>
                                                <span className="text-base md:text-xl font-black price">
                                                    4500 Kč
                                                </span>
                                            </Wrapper>
                                            <p className="pb-2 mt-2 text-center text-sm text-gray-500 border-b border-gray-500">
                                                Webová prezentace, jednostránková stránka nebo až 5 podstránek.
                                            </p>
                                        </Wrapper>
                                        <Wrapper className="mt-4 flex justify-center items-center gap-2">
                                            <MonitorCloud />
                                            <p className="text-lg text-gray-200 font-black">
                                                Co tato služba obsahuje?
                                            </p>
                                        </Wrapper>
                                        <Wrapper className="mt-2 flex flex-col gap-2">
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Kompletní webová stránka na míru, podle Vašeho výběru.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    2 Návrhy pro Vaší webovou stránku.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Stálá komunikace s klientem.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Průběžné podávání informací o stavu projektu.
                                                </p>
                                            </Wrapper>
                                        </Wrapper>
                                        <Link
                                        href={`#kontakt`}
                                        className="block mt-4 bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-center text-base md:text-lg font-black uppercase"
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, "kontakt");
                                        }}>
                                            Chci tuto službu
                                        </Link>
                                    </Wrapper>
                                </Fragment>
                            ) : null}
                            {activePricingTab === "Střední web" ? (
                                <Fragment>
                                    <Wrapper className="p-4 w-full md:max-w-[500px] bg-black/30 border border-gray-500 rounded-md price-wrapper">
                                        <Wrapper className="upper-content-wrapper">
                                            <Wrapper className="flex justify-between items-center">
                                                <p className="p-1 text-base md:text-xl font-black uppercase">
                                                    Větší webová stránka
                                                </p>
                                                <span className="text-base md:text-xl font-black price">
                                                    6000 Kč
                                                </span>
                                            </Wrapper>
                                            <p className="pb-2 mt-2 text-center text-sm text-gray-500 border-b border-gray-500">
                                                Webová prezentace, domovská stránka a k tomu až 10 podstránek.
                                            </p>
                                        </Wrapper>
                                        <Wrapper className="mt-4 flex justify-center items-center gap-2">
                                            <MonitorCloud />
                                            <p className="text-lg text-gray-200 font-black">
                                                Co tato služba obsahuje?
                                            </p>
                                        </Wrapper>
                                        <Wrapper className="mt-2 flex flex-col gap-2">
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Kompletní webová stránka na míru, podle Vašeho výběru.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Až 10 podstránek.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Vlastní kontaktní formulář na míru.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Stálá komunikace s klientem.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Průběžné podávání informací o stavu projektu.
                                                </p>
                                            </Wrapper>
                                        </Wrapper>
                                        <Link
                                        href={`#kontakt`}
                                        className="block mt-4 bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-center text-base md:text-lg font-black uppercase"
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, "kontakt");
                                        }}>
                                            Chci tuto službu
                                        </Link>
                                    </Wrapper>
                                </Fragment>
                            ): null}
                            {activePricingTab === "Velký web" ? (
                                <Fragment>
                                    <Wrapper className="p-4 w-full md:max-w-[500px] bg-black/30 border border-gray-500 rounded-md price-wrapper">
                                        <Wrapper className="upper-content-wrapper">
                                            <Wrapper className="flex justify-between items-center">
                                                <p className="p-1 text-base md:text-xl font-black uppercase">
                                                    Velká webová stránka
                                                </p>
                                                <span className="text-base md:text-xl font-black price">
                                                    8000 Kč
                                                </span>
                                            </Wrapper>
                                            <p className="pb-2 mt-2 text-center text-sm text-gray-500 border-b border-gray-500">
                                                Webová prezentace, domovská stránka a k tomu až 15 podstránek.
                                            </p>
                                        </Wrapper>
                                        <Wrapper className="mt-4 flex justify-center items-center gap-2">
                                            <MonitorCloud />
                                            <p className="text-lg text-gray-200 font-black">
                                                Co tato služba obsahuje?
                                            </p>
                                        </Wrapper>
                                        <Wrapper className="mt-2 flex flex-col gap-2">
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Kompletní webová stránka na míru, podle Vašeho výběru.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Až 15 podstránek.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Vlastní kontaktní formulář na míru.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Stálá komunikace s klientem.
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="flex items-center gap-2">
                                                <CheckCircle className="text-green-500" />
                                                <p className="text-base text-gray-200">
                                                    Průběžné podávání informací o stavu projektu.
                                                </p>
                                            </Wrapper>
                                        </Wrapper>
                                        <Link
                                        href={`#kontakt`}
                                        className="block mt-4 bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-center text-base md:text-lg font-black uppercase"
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, "kontakt");
                                        }}>
                                            Chci tuto službu
                                        </Link>
                                    </Wrapper>
                                </Fragment>
                            ): null}
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
                <Wrapper className="mt-2 flex justify-center py-10">
                    <p className="p-2 text-center text-sm text-gray-500">
                        Pokud Vaše dotazy nebyli zodpovězené nebo máte na mě, jakékoliv dotazy, neváhejte mne
                        {" "}
                        <Link
                        href={`#kontakt`}
                        className="border-b border-gray-500"
                        onClick={(e) => {
                            setLinkWithoutHash(e, "kontakt");
                        }}>
                            kontaktovat.
                        </Link>
                    </p>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Pricing;