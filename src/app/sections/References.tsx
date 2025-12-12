"use client";

import {
    useState,
    useRef,
    useEffect,
    Fragment,
    Activity
} from "react";
import {
    Sparkle,
    X
} from "lucide-react";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    useTheme
} from "../context/ThemeContext";
import clsx from "clsx";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

gsap.registerPlugin(ScrollTrigger);

const References = () => {
    const [referenceActiveTab, setReferenceActiveTab] = useState<"Klient" | "Vývojář">("Klient");
    const [referenceDetailClicked, setReferenceDetailClicked] = useState<boolean>(false)
    const sectionTextRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionTextRef.current) return;

        gsap.from(sectionTextRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionTextRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    }, []);

    const {
        theme
    } = useTheme();

    return (
        <Fragment>
            <Wrapper
                className={clsx(`
                ${theme === "Dark"
                ?
                "bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] border-t border-gray-500"
                :
                "bg-gray-50 border-t border-gray-200"}
                section`)}
                id="reference"
            >
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    <Wrapper ref={sectionTextRef}>
                        <Wrapper className={clsx(`${theme === "Dark" ? "text-white" : "text-black/90"} flex flex-col justify-center items-center`)}>
                            <PageLabel
                                pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                                pageLabelText="References"
                                className="text-white"
                            />
                            <h2 className="text-3xl md:text-5xl font-black uppercase">
                                2 Reference
                            </h2>
                            <p className={clsx(`${theme === "Dark" ? "text-gray-300" : "text-black/90"} mt-4 text-base text-center`)}>
                                Reference, jsou důkazem důvěryhodnosti.
                            </p>
                        </Wrapper>
                        <Wrapper className="mt-6 flex justify-center items-center flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
                            {/* <p className={clsx(`${theme === "Dark" ? "text-gray-500" : "text-black/90"}`)}>
                                🤷🏼 Zatím žádné recenze nemám.
                            </p> */}
                            <Wrapper className={clsx((`p-4 md:p-5 lg:p-6 ${theme === "Dark" ? "bg-black/30" : "bg-white"} rounded-md border border-white/25 w-full md:max-w-[450px] lg:max-w-[650px] cursor-pointer`))}>
                                <Wrapper className="pb-2 flex justify-center items-center gap-2 md:gap-3 lg:gap-4 border-b border-white/25">
                                    <Image
                                    height={50}
                                    width={50}
                                    src="/fotky/reference/Tereza Gréňová.jpg"
                                    alt="Reference Tereza Gréňová"
                                    loading="lazy"
                                    decoding="async"
                                    className="w-10 h-10 md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] rounded-full"
                                    />
                                    {/* <h3 className="text-xl md:text-[22px] lg:text-2xl font-bold">
                                        Tereza Gréňová
                                    </h3> */}
                                    <ul className={clsx(`flex justify-center items-center gap-2 md:gap-3 lg:gap-4 ${theme === "Dark" ? "text-white" : "text-black/90"}`)}>
                                        <li className="text-xl md:text-[22px] lg:text-2xl font-bold">
                                            Tereza Gréňová
                                        </li>
                                        <li className="text-sm md:text-[15px] lg:text-base">
                                            <Link
                                            href="https://candellasalon.cz"
                                            target="_blank">
                                                candellasalon.cz
                                            </Link>
                                        </li>
                                    </ul>
                                </Wrapper>
                                <Wrapper>
                                    <ul className="mt-2 md:mt-3 lg:mt-4 flex justify-center items-center gap-6 md:gap-8 lg:gap-10">
                                        <li
                                        className={clsx(`${referenceActiveTab === "Klient" && "p-1.5 md:p-2 lg:p-2.5 bg-white text-black"} rounded-md`)}
                                        onClick={(e) => {
                                            setReferenceActiveTab("Klient");
                                        }}>
                                            Klient
                                        </li>
                                        <li
                                        className={clsx(`${referenceActiveTab === "Vývojář" && "p-1.5 md:p-2 lg:p-2.5 bg-white text-black"} list-disc rounded-md`)}
                                        onClick={(e) => {
                                            setReferenceActiveTab("Vývojář");
                                        }}>
                                            Vývojář
                                        </li>
                                    </ul>
                                </Wrapper>
                                {
                                    referenceActiveTab === "Klient" ? (
                                        <Fragment>
                                            <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-[15px] lg:text-[15.5px] text-center line-clamp-6">
                                                Spolupráce s Vojtou byla naprosto skvělá! Od začátku do konce pracoval profesionálně, rychle a s obrovským přehledem. Všechny mé požadavky dokonale pochopil, navrhl ještě lepší řešení a dokázal proměnit moje představy v krásný, moderní a funkční web.

                                                Komunikace byla rychlá, příjemná a vždy s ochotou vysvětlit každý detail. Web běží perfektně, načítá se rychle a přesně vystihuje styl, který jsem chtěla.

                                                Mám z výsledku obrovskou radost a doporučuji ho všemi deseti každému, kdo hledá spolehlivého, talentovaného a lidského profesionála. 💻✨
                                                Moc moc děkuji Vojto!☺️
                                            </p>
                                        </Fragment>
                                    ) : (
                                        <Fragment>
                                            <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-[15px] lg:text-[15.5px] text-center line-clamp-6">
                                                Paní Gréňová mě oslovila s tím, že potřebuje modernizovat její web, oceňuji rychlou komunikaci,
                                                ještě během modernizování jejího webu jsem komunikoval s její kamarádkou paní Varryšovou, která měla na starosti designovou stránku.

                                                Doporučuji.
                                            </p>
                                        </Fragment>
                                    )
                                }
                                {/* <button
                                className="mt-2 md:mt-4 lg:mt-6 p-2 md:p-3 lg:p-4 bg-white text-black text-left md:text-center rounded-md w-full cursor-pointer"
                                onClick={(e) => {
                                    setReferenceDetailClicked(true);
                                }}>
                                    Detail Reference
                                </button> */}
                            </Wrapper>
                        </Wrapper>
                        <Wrapper className="mt-2 flex justify-center py-10">
                            <p className="p-2 text-center text-sm text-gray-500">
                                Máte na mě jakýkoliv dotaz, neváhejte mne
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
                </Wrapper>
            </Wrapper>
            {
                referenceDetailClicked && (
                    <Fragment>
                        <Wrapper className="fixed inset-0 overflow-y-hidden bg-black/30">
                        </Wrapper>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default References;