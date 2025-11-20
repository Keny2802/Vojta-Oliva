"use client";

import {
    Fragment
} from "react";
import {
    Sparkle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";

const AboutMe = () => {
    return (
        <Fragment>
            <Wrapper
            className="border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]"
            attributes={{
                id: "o-mne"
            }}>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    <Wrapper className="flex flex-col justify-center items-center">
                        <PageLabel
                        pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                        pageLabelText="O mně"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            5 O mně
                        </h2>
                        <p className="mt-4 text-base text-center text-gray-300">
                            Díky této sekci, zjistíte více informací o mně.
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
                            <Wrapper className="bg-black/30 rounded-md p-4 border border-gray-500 flex flex-col">
                                <h2 className="text-2xl md:text-3xl font-black uppercase">
                                    Zjistěte o mně více informací
                                </h2>
                                <p className="mt-2 pb-1 text-sm text-gray-500 border-b border-gray-500">
                                    Chcete o mě vědet více, přečtěte si o mě, těchto pár slov.
                                </p>
                                <Wrapper className="mt-2 flex flex-col">
                                    <p className="text-sm text-gray-500">
                                        Ahoj přátelé, kamarádi, webaři a všichni.
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        Jmenuju se Vojta a jsem student, který ve volném čase dělá weby, které jsou moje velkým koníčkem.
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Ke dni 20/11/2025, sháním první klienty a proto nastavuji ceny tak nízko.
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">
                                        Mým cílem nejsou peníze na prvním místě, ale získání prvních klientů a získání zkušeností a referencí, proto ceny jsou spíše symbolické.
                                    </p>
                                    <p className="mt-3 text-sm text-gray-500 italic">
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
                                className="inline-block mt-4 px-3 py-2 rounded-md bg-blue-600 text-center cursor-pointer">
                                    Napište mi
                                </Link>
                            </Wrapper>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default AboutMe;