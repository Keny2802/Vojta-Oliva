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
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent
} from "@/components/ui/accordion";
import faqSet from "../sets/faqSet";
import englishFaqSet from "../sets/englishFaqSet";
import deutschFaqSet from "../sets/deutschFaqSet";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";

const Faq = () => {
    const {
        language,
        setLanguage
    } = useLanguage();

    return (
        <Fragment>
            <Wrapper
            className="border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]"
            attributes={{
                id: "faq"
            }}>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    {
                        language === "Čeština" && (
                            <Fragment>
                                <Wrapper className="flex flex-col justify-center items-center">
                                    <PageLabel
                                    pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                                    pageLabelText="FAQ"
                                    />
                                    <h2 className="text-3xl md:text-5xl font-black uppercase">
                                        4 FAQ
                                    </h2>
                                    <p className="mt-4 text-base text-center text-gray-300">
                                        FAQ, odpovědi na Vaše často kladené a nezodpovězené dotazy.
                                    </p>
                                    <Wrapper className="mt-4 w-full faq-wrapper">
                                        <Accordion
                                        type="single"
                                        collapsible
                                        className="mx-auto bg-black/20 rounded-md w-full">
                                            {
                                            faqSet.map((faq, faqIndex) => (
                                                <Fragment key={faqIndex}>
                                                    <AccordionItem
                                                    value={`faq-item-${faqIndex}`}
                                                    className="p-4">
                                                        <AccordionTrigger
                                                        className="text-base cursor-pointer">
                                                            {faq.faqHeading}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="text-sm">
                                                            {faq.faqContent}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Fragment>
                                            ))
                                            }
                                        </Accordion>
                                        <Wrapper className="mt-2 flex justify-center items-center py-10">
                                            <p className="p-2 text-center text-sm text-gray-500">
                                                Stále jste nedostali odpovědi na Vaše dotazy, vůbec se nic neděje,
                                                {" "}
                                                <Link
                                                href={`#kontakt`}
                                                className="border-b border-gray-500"
                                                onClick={(e) => {
                                                    setLinkWithoutHash(e, "kontakt");
                                                }}>
                                                    kontaktujte mě.
                                                </Link>
                                            </p>
                                        </Wrapper>
                                    </Wrapper>
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
                                    pageLabelText="FAQ"
                                    />
                                    <h2 className="text-3xl md:text-5xl font-black uppercase">
                                        4 FAQ
                                    </h2>
                                    <p className="mt-4 text-base text-center text-gray-300">
                                        FAQ, answers to your frequently asked and unanswered questions.
                                    </p>
                                    <Wrapper className="mt-4 w-full faq-wrapper">
                                        <Accordion
                                        type="single"
                                        collapsible
                                        className="mx-auto bg-black/20 rounded-md w-full">
                                            {
                                            englishFaqSet.map((faq, faqIndex) => (
                                                <Fragment key={faqIndex}>
                                                    <AccordionItem
                                                    value={`faq-item-${faqIndex}`}
                                                    className="p-4">
                                                        <AccordionTrigger
                                                        className="text-base cursor-pointer">
                                                            {faq.faqHeading}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="text-sm">
                                                            {faq.faqContent}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Fragment>
                                            ))
                                            }
                                        </Accordion>
                                        <Wrapper className="mt-2 flex justify-center items-center py-10">
                                            <p className="p-2 text-center text-sm text-gray-500">
                                                You still haven't received answers to your questions, nothing is happening at all,
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
                                    </Wrapper>
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
                                    pageLabelText="FAQ"
                                    />
                                    <h2 className="text-3xl md:text-5xl font-black uppercase">
                                        4 FAQ
                                    </h2>
                                    <p className="mt-4 text-base text-center text-gray-300">
                                        FAQ, Antworten auf Ihre häufig gestellten und unbeantworteten Fragen.
                                    </p>
                                    <Wrapper className="mt-4 w-full faq-wrapper">
                                        <Accordion
                                        type="single"
                                        collapsible
                                        className="mx-auto bg-black/20 rounded-md w-full">
                                            {
                                            deutschFaqSet.map((faq, faqIndex) => (
                                                <Fragment key={faqIndex}>
                                                    <AccordionItem
                                                    value={`faq-item-${faqIndex}`}
                                                    className="p-4">
                                                        <AccordionTrigger
                                                        className="text-base cursor-pointer">
                                                            {faq.faqHeading}
                                                        </AccordionTrigger>
                                                        <AccordionContent className="text-sm">
                                                            {faq.faqContent}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                </Fragment>
                                            ))
                                            }
                                        </Accordion>
                                        <Wrapper className="mt-2 flex justify-center items-center py-10">
                                            <p className="p-2 text-center text-sm text-gray-500">
                                                Sie haben immer noch keine Antworten auf Ihre Fragen erhalten, es passiert überhaupt nichts,
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
                                    </Wrapper>
                                </Wrapper>
                            </Fragment>
                        )
                    }
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Faq;