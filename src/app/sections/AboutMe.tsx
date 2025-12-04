"use client";

import {
    useRef,
    useEffect,
    Fragment
} from "react";
import {
    Sparkle
} from "lucide-react";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    useTheme
} from "../context/ThemeContext";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
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
        theme
    } = useTheme();

    return (
        <Fragment>
            <Wrapper
                className={clsx(`${theme === "Dark" ? "border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]" : "bg-gray-50 border-t border-gray-200"} section`)}
                id="o-mne">
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white" ref={sectionTextRef}>
                    <Wrapper className={clsx(`${theme === "Dark" ? "text-white" : "text-black/90"} flex flex-col justify-center items-center`)}>
                        <PageLabel
                            pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                            pageLabelText="O mně"
                            className="text-white"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            6 O mně
                        </h2>
                        <p className="mt-4 text-base text-center">
                            Zjistěte o mně více.
                        </p>
                        <Wrapper className="mt-4 flex justify-between items-center flex-col md:flex-row gap-8">
                            <Image
                                height={400}
                                width={400}
                                src="/fotky/o-mne/o-mne.png"
                                alt="Fotka o mě, který je i zárověň jako inzerát."
                                loading="lazy"
                                decoding="async"
                                className=" w-full md:h-[600px] md:w-[600px] rounded-md"
                            />
                            <Wrapper className={clsx(`
                                ${theme === "Dark" ? "border border-gray-500 bg-black/30" : "border border-gray-200 bg-black/5"}
                                rounded-md p-4 flex flex-col`)}>
                                <h2 className="text-2xl md:text-3xl font-black uppercase">
                                    Zjistěte o mně více informací
                                </h2>
                                <p className="mt-2 pb-1 text-sm text-gray-500 border-b border-gray-500">
                                    Chcete o mě vědet více, přečtěte si o mě, těchto pár slov.
                                </p>
                                <Wrapper className={clsx(`${theme === "Dark" ? "text-gray-500" : "text-black/80"} mt-2 flex flex-col`)}>
                                    <p className="text-sm">
                                        Ahoj přátelé, kamarádi, webaři a všichni.
                                    </p>
                                    <p className="mt-1 text-sm">
                                        Jmenuju se Vojta a jsem student, který ve volném čase dělá weby, které jsou moje velkým koníčkem.
                                    </p>
                                    <p className="text-sm">
                                        Ke dni 20/11/2025, sháním první klienty a proto nastavuji ceny tak nízko.
                                    </p>
                                    <p className="mt-2 text-sm">
                                        Mým cílem nejsou peníze na prvním místě, ale získání prvních klientů a získání zkušeností a referencí, proto ceny jsou spíše symbolické.
                                    </p>
                                    <p className="mt-3 text-sm italic">
                                        Napsal Vojta Oliva
                                    </p>
                                    {/* <p className="mt-2 text-sm text-gray-500">
                                        PS: Mějte se všichni krásně.
                                    </p> */}
                                </Wrapper>
                                <Link
                                    href={`#kontakt`}
                                    onClick={(e) => {
                                        setLinkWithoutHash(e, "kontakt");
                                    }}
                                    className="inline-block mt-4 px-3 py-2 rounded-md bg-blue-600 text-gray-300 text-center cursor-pointer">
                                    Napište mi
                                </Link>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper className="mt-2 flex justify-center items-center py-10">
                        <p className="p-2 text-center text-sm text-gray-500">
                            Nepodal jsem o sobě dostatečné INFO nebo chcete se mě na cokoliv zeptat, neváhejte mě
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
        </Fragment>
    );
};

export default AboutMe;