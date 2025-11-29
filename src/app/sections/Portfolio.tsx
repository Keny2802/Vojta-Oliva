"use client";

import {
    useRef,
    useState,
    useEffect,
    Fragment,
    ReactNode,
} from "react";
import {
    Sparkle,
    SquareArrowOutUpRight
} from "lucide-react";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    useTheme
} from "../context/ThemeContext";
import gsap from "gsap";
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

gsap.registerPlugin(ScrollTrigger);

const Portfolio = ({ ...props }) => {
    const portfolioProjectRef = useRef<HTMLDivElement>(null);
    const sectionTextRef = useRef<HTMLHeadingElement>(null);
    const [tilt, setTilt] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const animatedPortfolioProjects = gsap.utils.toArray<HTMLDivElement>(".reveal-portfolio-project");

        if (!sectionTextRef.current || !portfolioProjectRef.current) return;

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

        animatedPortfolioProjects.forEach((portfolioProject, portfolioProjectIndex) => {
            gsap.from(portfolioProject, {
                opacity: 0,
                y: 30,
                duration: 0.5,
                delay: portfolioProjectIndex * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: portfolioProject,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            });
        });
    }, []);

    const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const currentTarget = e.currentTarget;
        const clientX = e.clientX;
        const clientY = e.clientY;
        const rect = currentTarget.getBoundingClientRect();

        const x = (clientX - rect.left) / rect.width;
        const y = (clientY - rect.top) / rect.height;

        setTilt({
            x: (y - 0.5) * 20,
            y: (x - 0.5) * -20
        });
    };

    const {
        theme
    } = useTheme();

    const {
        className,
    } = props;

    return (
        <Fragment>
            <Wrapper
                className={clsx(`
                ${className || ""}
                ${
                theme === "Dark"
                ?
                "bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] border-t border-gray-500"
                :
                "bg-gray-50 border-t border-gray-200"
                }
                section portfolio-wrapper`)}
                id="portfolio"
            >
                <Wrapper className="px-4 md:px-24 py-4 md:py-16">
                    <Wrapper className={clsx(`${theme === "Dark" ? "text-white" : "text-black/90"} flex flex-col justify-center items-center`)}
                        ref={sectionTextRef}>
                        <PageLabel
                            pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                            pageLabelText="Portfolio"
                            className="text-white"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            1 Moje portfolio
                        </h2>
                        <p className="mt-4 text-base">
                            Moje portfolio je důkazem důvěryhodnosti.
                        </p>
                    </Wrapper>
                    <Wrapper className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                            portfolioSet.map((portfolioProject, portfolioProjectIndex) => (
                                <Fragment key={portfolioProjectIndex}>
                                    <Wrapper
                                        className={clsx(`
                                        ${theme === "Dark" ? "bg-[#171717]/30" : "bg-white shadow-md"}
                                        relative border border-gray-500 overflow-hidden rounded-md w-full max-w-sm mx-auto cursor-pointer transition-transform duration-300 ease-in-out reveal-portfolio-project
                                        `)}
                                        onMouseMove={handleMove}
                                        onMouseLeave={() => {
                                            setTilt({
                                                x: 0,
                                                y: 0
                                            });
                                        }}
                                        style={{
                                            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                                        }}
                                        >
                                        {/* <span className="absolute top-2 right-5 text-[#f8aa0e] text-5xl font-black">
                                            {portfolioProjectIndex + 1}
                                        </span> */}
                                        <Image
                                        height={182}
                                        width={384}
                                        src={portfolioProject.projectImage}
                                        alt={`Úvodní Fotka - ${portfolioProject.projectName}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-auto h-auto" />
                                        <Wrapper className="p-4 flex flex-col gap-2">
                                            <p className={clsx(`${theme === "Dark" ? "text-white" : "text-black/90"} text-2xl font-black uppercase`)}>
                                                {portfolioProject.projectName}
                                            </p>
                                            <p className={clsx(`${theme === "Dark" ? "text-gray-300" : "text-black/80"}`)}>
                                                {portfolioProject.projectDescription}
                                            </p>
                                            <ul className={clsx(`${theme === "Dark" ? "text-gray-300" : "text-black/90"} mt-2 flex items-center gap-2 portfolio-project-tech-stack`)}>
                                                {
                                                    portfolioProject.portfolioTechStack.map((portfolioTechStack, portfolioTechStackIndex) => (
                                                        <Fragment key={portfolioTechStackIndex}>
                                                            <li className={clsx(`${theme === "Dark" ? "bg-white/5" : "bg-white/10 shadow-lg"} p-2 rounded-lg text-sm portfolio-project-list-item`)}>
                                                                {portfolioTechStack}
                                                            </li>
                                                        </Fragment>
                                                    ))
                                                }
                                            </ul>
                                            <Link
                                                href={portfolioProject.projectLink}
                                                className={clsx(`${theme === "Dark" ? "p-4 rounded-md bg-white/5 text-gray-300" : "p-4 rounded-md bg-white/10 shadow-md text-black/80"} flex items-center gap-3 mt-6 underline underline-offset-4 transition-colors duration-300 ease-in-out hover:text-[#14b8a5]`)}>
                                                <SquareArrowOutUpRight />
                                                Zobrazit webovku
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