"use client";

import {
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
import pricingCardsSet from "../sets/pricingCardsSet";
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
                section pricing-wrapper`)}
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
                        {
                            pricingCardsSet.map((pricingCard, pricingCardIndex) => (
                                <Fragment key={pricingCardIndex}>
                                    <Wrapper className={clsx(`
                                        ${theme === "Dark" ? "border border-gray-500" : "border border-gray-200"}
                                        flex flex-col justify-center p-2 rounded-md pricing-card-wrapper`)}>
                                        <Wrapper className={clsx(`
                                        ${pricingCard.cardLabel === "Pro ty co spěchají" && "bg-[#14b8a5]"}
                                        ${pricingCard.cardLabel === "Nejlepší" && "bg-[#6267f2]"}
                                        ${pricingCard.cardLabel === "Novinka" && "bg-[#14b8a5]"}
                                        mb-2 p-2 rounded-md pricing-card-label-wrapper
                                        `)}>
                                            <span className="block text-base uppercase text-center tracking-wide">
                                                {pricingCard.cardLabel}
                                            </span>
                                        </Wrapper>
                                        <Wrapper className={clsx(`${theme === "Dark" ? "bg-black/30" : "bg-black/90"} p-4 w-full md:max-w-[500px] rounded-md price-wrapper`)}>
                                            <Wrapper className="upper-content-wrapper">
                                                <Wrapper className="flex flex-col gap-3">
                                                    <p className={clsx(`
                                                    ${pricingCard.cardLabel === "Pro ty co spěchají" && "border-b border-[#14b8a5]"}
                                                    ${pricingCard.cardLabel === "Nejlepší" && "border-b border-[#6267f2]"}
                                                    ${pricingCard.cardLabel === "Novinka" && "border-b border-[#14b8a5]"}
                                                    p-1 text-2xl md:text-3xl font-black uppercase
                                                    `)}>
                                                        {pricingCard.cardHeading}
                                                    </p>
                                                    <p className="text-4xl md:text-6xl text-center font-black price">
                                                        {pricingCard.cardPrice} Kč
                                                        {pricingCard.cardPrice === 2000 && (
                                                            <span className="text-base md:text-xl">
                                                                {" "}
                                                                /
                                                                {" "}
                                                                měsíc
                                                            </span>
                                                        )}
                                                    </p>
                                                    <p className="pb-2 mt-2 text-center text-sm text-gray-500 border-b border-gray-500">
                                                        {pricingCard.cardSubheading}
                                                    </p>
                                                </Wrapper>
                                            </Wrapper>
                                            <Wrapper className="mt-4 flex justify-center items-center gap-2">
                                                <MonitorCloud />
                                                <p className="text-lg text-gray-200 font-black">
                                                    Co tato služba obsahuje?
                                                </p>
                                            </Wrapper>
                                            <Wrapper className="mt-2 flex flex-col gap-2">
                                                {
                                                    pricingCard.cardIncludingSet.map((whatIncludes, whatIncludesIndex) => (
                                                        <Fragment key={whatIncludesIndex}>
                                                            <Wrapper className="flex items-center gap-2">
                                                                <CheckCircle className="text-green-500" />
                                                                <p className="text-base text-gray-200">
                                                                    {whatIncludes}
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
                                                Objednat
                                            </Link>
                                        </Wrapper>
                                    </Wrapper>
                                </Fragment>
                            ))
                        }
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