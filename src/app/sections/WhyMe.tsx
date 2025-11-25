"use client";

import {
    useRef,
    useEffect,
    Fragment,
    ReactNode
} from "react";
import {
    Sparkle,
    CheckCircle
} from "lucide-react";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    useTheme
} from "../context/ThemeContext";
import gsap from "gsap";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";

type WhymeProps = {
    className?: string;
    children?: ReactNode;
};

gsap.registerPlugin(ScrollTrigger);

const WhyMe = ({ ...props }: WhymeProps) => {
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
        theme,
        setTheme
    } = useTheme();

    return (
        <Fragment>
            <Wrapper className={clsx(`
            ${className || ""}
            ${theme === "Dark" ? "border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]" : "bg-gray-50 border-t border-gray-200"}
            why-me-wrapper`)}
            id="proc-ja">
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white" ref={sectionTextRef}>
                    <Wrapper className={clsx(`${theme === "Dark" ? "text-white" : "text-black/90"} flex flex-col justify-center items-center`)}>
                        <PageLabel
                            pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                            pageLabelText="Proč si vybrat mě"
                            className="text-white"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            5 Proč já
                        </h2>
                        <p className="mt-4 text-base text-center">
                            Proč si vybrat mě, je spolehlivost, přesnost a rychlá komunikace.
                        </p>
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
                                        <p className="text-sm text-center text-black/90">
                                            Ano, více návrhů v ceně.
                                        </p>
                                    </Wrapper>
                                </Wrapper>
                            </Fragment>
                        )
                    }
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default WhyMe;