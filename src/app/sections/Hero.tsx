"use client";

import {
    useEffect,
    useRef,
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
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    useTheme
} from "../context/ThemeContext";
import clsx from "clsx";
import Link from "next/link";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "../components/Wrapper";
import HeroOverlayWrapper from "../components/HeroOverlayWrapper";
import PageLabel from "../components/PageLabel";
import TypingEffect from "../components/TypingEffect";

type heroProps = {
    className?: string;
    children?: ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ ...props }: heroProps) => {
    const {
        theme,
        setTheme
    } = useTheme();

    const {
        className,
        children
    } = props;

    const sectionTextRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!sectionTextRef.current) {
            return;
        };

        gsap.from(sectionTextRef.current, {
            y: 20,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionTextRef.current,
                start: 0
            }
        });
    }, []);

    return (
        <Fragment>
            <Wrapper className={clsx(`
                ${className || ""}
                ${theme === "Dark" ? "bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]" : "bg-gray-50 shadow-md"}
                pt-28 md:pt-18 flex flex-col justify-center w-full min-h-screen section hero-wrapper`)}>
                <HeroOverlayWrapper className="p-4">
                    <Wrapper className="flex flex-col items-center" ref={sectionTextRef}>
                        <PageLabel
                            pageLabelAdditContent={<Home />}
                            pageLabelText="Domov"
                        />
                        <Wrapper className={clsx(`${theme === "Light" && "text-black/90"} flex flex-col items-center`)}>
                            <h1 className="text-3xl md:text-6xl font-black hero-text">
                                {/* Nakopni svůj web jen a pouze s
                                {" "}
                                <span className="text-[#14b8a5]">
                                    Vojtou Olivou
                                </span>,
                                {" "}
                                cenově dostupný webový vývoj. */}ˇ
                                Tvořím moderní weby, které vyčnívají
                            </h1>
                            <TypingEffect
                            // typingText="Moderní weby s nápadem za přijatelné ceny."
                            typingText="Nahraďte svůj starý web mým řešením."
                            typingSpeed={60}
                            />
                            <p className="mt-2 md:mt-3 lg:mt-4 p-4 text-lg md:text-2xl max-w-3xl">
                                Ahoj, jmenuju se Vojta Oliva, poskytuji webový vývoj živnostníkům a malým podnikům, za opravdu dostupné ceny.
                            </p>
                        </Wrapper>
                        <Wrapper className="w-full mt-4 p-4 flex justify-center items-center gap-4 flex-col md:flex-row">
                            <Link
                                href={`/nabidka`}
                                className={clsx(`
                                ${theme === "Dark" ? "bg-white" : "bg-white shadow-md"}
                                w-full md:w-max flex justify-center md:justify-start items-center gap-2 text-black rounded-lg px-3 py-2
                                `)}>
                                <FileText />
                                Získat nabídku
                            </Link>
                            <Link
                                href={`#kontakt`}
                                className={clsx(`
                                ${theme === "Dark" ? "bg-gray-800" : "bg-black"}
                                w-full md:w-max flex justify-center md:justify-start items-center gap-2 rounded-lg px-3 py-2`)}
                                onClick={(e) => {
                                    setLinkWithoutHash(e, "kontakt")
                                }}>
                                <Phone />
                                Nezávazná konzultace zdarma
                            </Link>
                        </Wrapper>
                    </Wrapper>
                    {
                        theme === "Dark" ? (
                            <Fragment>
                                <Wrapper className="mt-8 grid grid-cols-2 md:flex md:justify-between items-center gap-8 flex-col md:flex-row">
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-500" />
                                        <p className="text-[15.5px]">
                                            Výborné ceny
                                        </p>
                                        <p className="text-sm text-gray-200">
                                            4.500 - 8.000 Kč
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
                        ) : (
                            <Fragment>
                                <Wrapper className="mt-8 grid grid-cols-2 md:flex md:justify-between items-center gap-8 flex-col md:flex-row">
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-600" />
                                        <p className="text-[15.5px] text-black/90">
                                            Výborné ceny
                                        </p>
                                        <p className="text-sm text-black/90">
                                            4.500 - 8.000 Kč
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-600" />
                                        <p className="text-[15.5px] text-black/90">
                                            Rychlé dodání
                                        </p>
                                        <p className="text-sm text-black/90">
                                            1.5 - 3 týdny
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-600" />
                                        <p className="text-[15.5px] text-black/90">
                                            Rychlá komunikace
                                        </p>
                                        <p className="text-sm text-black/90">
                                            To je samozřejmostí
                                        </p>
                                    </Wrapper>
                                    <Wrapper className="flex flex-col items-center gap-1">
                                        <CheckCircle className="h-12 w-12 text-green-600" />
                                        <p className="text-[15.5px] text-black/90">
                                            Více návrhů
                                        </p>
                                        <p className="text-sm text-black/90">
                                            Ano, více návrhů v ceně.
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