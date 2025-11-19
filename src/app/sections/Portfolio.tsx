import {
    Fragment,
    ReactNode
} from "react";
import {
    Sparkle
} from "lucide-react";
import portfolioSet from "../sets/portfolioSet";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";

type portfolioProps = {
    className?: string;
    children?: ReactNode;
};

const Portfolio = ({ ...props }) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper
            className={clsx(`${className || ""} border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] portfolio-wrapper`)}
            attributes={{
                id: "portfolio"
            }}>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    <Wrapper className="flex flex-col justify-center items-center">
                        <PageLabel
                        pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                        pageLabelText="Portfolio"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            Moje portfolio
                        </h2>
                        <p className="mt-4 text-base text-gray-300">
                            Moje portfolio je důkazem, že nelžu.
                        </p>
                    </Wrapper>
                    <Wrapper className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            portfolioSet.map((portfolioProject, portfolioProjectIndex) => (
                                <Fragment key={portfolioProjectIndex}>
                                    <Wrapper className="relative bg-black/30 border border-gray-500 p-4 overflow-hidden rounded-md w-full max-w-sm mx-auto">
                                        <span className="absolute top-2 right-5 text-[#f8aa0e] text-5xl font-black">
                                            {portfolioProjectIndex + 1}
                                        </span>
                                        <Image
                                        height={182}
                                        width={384}
                                        src={portfolioProject.projectImage}
                                        alt={`Úvodní Fotka - ${portfolioProject.projectName}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-auto h-auto"></Image>
                                        <Wrapper className="p-4 flex flex-col gap-2">
                                            <p className="text-2xl">
                                                {portfolioProject.projectName}
                                            </p>
                                            <p className="text-gray-300">
                                                {portfolioProject.projectDescription}
                                            </p>
                                            <Link
                                            href={portfolioProject.projectLink}
                                            className="mt-6 text-gray-300 underline underline-offset-4">
                                                Zobrazit {portfolioProject.projectName}
                                            </Link>
                                        </Wrapper>
                                    </Wrapper>
                                </Fragment>
                            ))
                        }
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Portfolio;