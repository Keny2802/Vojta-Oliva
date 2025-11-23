"use client";

import {
    Fragment
} from "react";
import {
    Sparkle
} from "lucide-react";
import {
    useLanguage
} from "../components/LanguageContext";
import Link from "next/link";
import Image from "next/image";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";

const AboutMe = () => {
    const {
        language,
        setLanguage
    } = useLanguage();

    return (
        <Fragment>
            <Wrapper
            className="border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]"
            attributes={{
                id: "o-mne"
            }}>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    {
                        language === "Čeština" && (
                            <Fragment>
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
                            </Fragment>
                        )
                    }
                    {
                        language === "English" && (
                            <Fragment>
                                <Wrapper className="flex flex-col justify-center items-center">
                                    <PageLabel
                                    pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                                    pageLabelText="About me"
                                    />
                                    <h2 className="text-3xl md:text-5xl font-black uppercase">
                                        5 About me
                                    </h2>
                                    <p className="mt-4 text-base text-center text-gray-300">
                                        Thanks to this section, you will find out more information about me.
                                    </p>
                                    <Wrapper className="mt-4 flex justify-between items-center flex-col md:flex-row gap-8">
                                        <Image
                                        height={400}
                                        width={400}
                                        src="/fotky/o-mne/about-me.png"
                                        alt="A photo of me, which is also an advertisement."
                                        loading="lazy"
                                        decoding="async"
                                        className=" w-full md:h-[600px] md:w-[600px] rounded-md"
                                        />
                                        <Wrapper className="bg-black/30 rounded-md p-4 border border-gray-500 flex flex-col">
                                            <h2 className="text-2xl md:text-3xl font-black uppercase">
                                                Find out more about me
                                            </h2>
                                            <p className="mt-2 pb-1 text-sm text-gray-500 border-b border-gray-500">
                                                If you want to know more about me, read these few words about me.
                                            </p>
                                            <Wrapper className="mt-2 flex flex-col">
                                                <p className="text-sm text-gray-500">
                                                    Hello friends, buddies, webmasters and everyone.
                                                </p>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    My name is Vojta and I am a student who makes websites in my free time, which is my big hobby.
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    As of 11/20/2025, I am looking for my first clients and that is why I am setting my prices so low.
                                                </p>
                                                <p className="mt-2 text-sm text-gray-500">
                                                    My goal is not money in the first place, but getting my first clients and gaining experience and references, which is why the prices are rather symbolic.
                                                </p>
                                                <p className="mt-3 text-sm text-gray-500 italic">
                                                    Written by Vojta Oliva
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
                                                Write to me
                                            </Link>
                                        </Wrapper>
                                    </Wrapper>
                                </Wrapper>
                                <Wrapper className="mt-2 flex justify-center items-center py-10">
                                    <p className="p-2 text-center text-sm text-gray-500">
                                        I didn't provide enough INFO about myself or if you want to ask me anything, don't hesitate to
                                        {" "}
                                        <Link
                                        href={`#kontakt`}
                                        className="border-b border-gray-500"
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, "kontakt");
                                        }}>
                                            contact me.
                                        </Link>
                                    </p>
                                </Wrapper>
                            </Fragment>
                        )
                    }
                    {
                        language === "Deutsch" && (
                            <Fragment>
                                <Wrapper className="flex flex-col justify-center items-center">
                                    <PageLabel
                                    pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                                    pageLabelText="Über mich"
                                    />
                                    <h2 className="text-3xl md:text-5xl font-black uppercase">
                                        5 Über mich
                                    </h2>
                                    <p className="mt-4 text-base text-center text-gray-300">
                                        Dank dieses Abschnitts erfahren Sie mehr über mich.
                                    </p>
                                    <Wrapper className="mt-4 flex justify-between items-center flex-col md:flex-row gap-8">
                                        <Image
                                        height={400}
                                        width={400}
                                        src="/fotky/o-mne/o-mne-de.png"
                                        alt="Ein Foto von mir, das gleichzeitig Werbung ist."
                                        loading="lazy"
                                        decoding="async"
                                        className=" w-full md:h-[600px] md:w-[600px] rounded-md"
                                        />
                                        <Wrapper className="bg-black/30 rounded-md p-4 border border-gray-500 flex flex-col">
                                            <h2 className="text-2xl md:text-3xl font-black uppercase">
                                                Erfahren Sie mehr über mich
                                            </h2>
                                            <p className="mt-2 pb-1 text-sm text-gray-500 border-b border-gray-500">
                                                Wenn Sie mehr über mich erfahren möchten, lesen Sie diese wenigen Worte über mich.
                                            </p>
                                            <Wrapper className="mt-2 flex flex-col">
                                                <p className="text-sm text-gray-500">
                                                    Hallo Freunde, Kumpel, Webmaster und alle anderen.
                                                </p>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Mein Name ist Vojta und ich bin Studentin. In meiner Freizeit erstelle ich Webseiten, was mein großes Hobby ist.
                                                </p>
                                                <p className="text-sm text-gray-500">
                                                    Ab dem 20.11.2025 suche ich meine ersten Kunden, und deshalb setze ich meine Preise so niedrig an.
                                                </p>
                                                <p className="mt-2 text-sm text-gray-500">
                                                    Mein Ziel ist in erster Linie nicht das Geld, sondern die Gewinnung meiner ersten Kunden und das Sammeln von Erfahrungen und Referenzen. Deshalb sind die Preise eher symbolisch.
                                                </p>
                                                <p className="mt-3 text-sm text-gray-500 italic">
                                                    Verfasst von Vojta Oliva
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
                                                Schreiben Sie mir
                                            </Link>
                                        </Wrapper>
                                    </Wrapper>
                                </Wrapper>
                                <Wrapper className="mt-2 flex justify-center items-center py-10">
                                    <p className="p-2 text-center text-sm text-gray-500">
                                        Ich habe nicht genügend Informationen über mich angegeben, und wenn Sie mir etwas fragen möchten, zögern Sie nicht, mich zu kontaktieren.
                                        {" "}
                                        <Link
                                        href={`#kontakt`}
                                        className="border-b border-gray-500"
                                        onClick={(e) => {
                                            setLinkWithoutHash(e, "kontakt");
                                        }}>
                                            Kontaktieren Sie mich.
                                        </Link>
                                    </p>
                                </Wrapper>
                            </Fragment>
                        )
                    }
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default AboutMe;