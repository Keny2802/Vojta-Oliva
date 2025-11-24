"use client";

import {
    useRef,
    useEffect,
    Fragment
} from "react";
import {
    useLanguage
} from "../components/LanguageContext";
import {
    Sparkle
} from "lucide-react";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";
import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

gsap.registerPlugin(ScrollTrigger);

const References = () => {
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
        language,
        setLanguage
    } = useLanguage();
    
    return (
        <Fragment>
            <Wrapper
            className="border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]"
            attributes={{
                id: "reference"
            }}>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    <Wrapper ref={sectionTextRef}>
                        <Wrapper className="flex flex-col justify-center items-center">
                            <PageLabel
                            pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                            pageLabelText="References" />
                            <h2 className="text-3xl md:text-5xl font-black uppercase">
                                2 Reference
                            </h2>
                            <p className="mt-4 text-base text-center text-gray-300">
                                Reference, jsou důkazem důvěryhodnosti.
                            </p>
                        </Wrapper>
                        <Wrapper className="mt-6 flex justify-center">
                            <p className="text-xl text-gray-500">
                                🤷🏼 Zatím žádné recenze nemám.
                            </p>
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
        </Fragment>
    );
};

export default References;