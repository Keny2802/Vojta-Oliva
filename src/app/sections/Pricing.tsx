"use client";

import {
    useState,
    useRef,
    useEffect,
    Fragment,
    ReactNode
} from "react";
import {
    Sparkle,
    CheckCircle,
    MonitorCloud
} from "lucide-react";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    useTheme
} from "../context/ThemeContext";
import gsap from "gsap";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import clsx from "clsx";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";

type pricingProps = {
    className?: string;
    children?: ReactNode;
};

type pricingTabType = "Malý web" | "Střední web" | "Velký web";
type englishPricingTabType = "Small web" | "Middle web" | "Big web";

gsap.registerPlugin(ScrollTrigger);

const Pricing = ({ ...props }: pricingProps) => {
    // const [selectedService, setSelectService] = useState<boolean>(false);
    // const [currentIndex, setCurrentIndex] = useState<number>(0);
    // const [addedService, addService] = useState<number[]>([]);
    const [activePricingTab, setActivePricingTab] = useState<pricingTabType>("Malý web");
    const [englishActivePricingTab, setEnglishActivePricingTab] = useState<englishPricingTabType>("Small web");

    const sectionTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionTextRef.current) {
            return;
        };

        gsap.from(sectionTextRef.current, {
            opacity: 0,
            y: 40,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionTextRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    const {
        className,
        children
    } = props;

    const {
        theme
    } = useTheme();

    return (
        <Fragment>
            <Wrapper
                className={clsx(`
                ${className || ""}
                ${theme === "Dark" ? "border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]" : "bg-gray-50 border-t border-gray-200"}
                pricing-wrapper`)}
                id="cenik">
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white" ref={sectionTextRef}>
                    <Wrapper className={clsx(`${theme === "Dark" ? "text-white" : "text-black/90"} flex flex-col justify-center items-center`)}>
                        <PageLabel
                            pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                            pageLabelText="Ceník"
                            className="text-white"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            3 Ceník
                        </h2>
                        <p className="mt-4 text-base text-center">
                            Ceník, který je dostupný opravdu pro všechny, jak pro jednotlivce tak pro malé firmy.
                        </p>
                    </Wrapper>
                    <Wrapper className="mt-6 flex justify-center gap-4 flex-col md:flex-row pricing-wrapper">
                        <Wrapper className={clsx(`
                        ${theme === "Dark" ? "bg-black/30 border border-gray-500" : "bg-black/90 border border-gray-200"}
                        p-4 w-full md:max-w-[500px] rounded-md price-wrapper`)}>
                            <Wrapper className="upper-content-wrapper">
                                <Wrapper className="flex justify-between items-center flex-wrap">
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
                                Objednat
                            </Link>
                        </Wrapper>
                        <Wrapper className={clsx(`
                            ${theme === "Dark" ? "bg-black/30 border border-gray-500" : "bg-black/90 border border-gray-200"}
                            p-4 w-full md:max-w-[500px] rounded-md price-wrapper`)}>
                                <PageLabel
                                pageLabelText="Nejoblíbenější"
                                className={clsx(`bg-[#6267f2] text-xl text-center font-bold`)} />
                                <Wrapper className="upper-content-wrapper">
                                    <Wrapper className="flex justify-between items-center flex-wrap">
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
                                    Objednat
                                </Link>
                        </Wrapper>
                        <Wrapper className={clsx(`
                        ${theme === "Dark" ? "bg-black/30 border border-gray-500" : "bg-black/90 border border-gray-200"}
                        p-4 w-full md:max-w-[500px] rounded-md price-wrapper`)}>
                            <PageLabel
                            pageLabelText="Správa webů"
                            className="bg-[#14b8a5] text-xl text-center font-bold" />
                            <Wrapper className="upper-content-wrapper">
                                <Wrapper className="flex justify-between items-center flex-wrap">
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
                                Objednat
                            </Link>
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