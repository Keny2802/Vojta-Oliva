import {
    useState,
    useContext,
    Fragment,
    ReactNode
} from "react";
import {
    useLanguage
} from "./LanguageContext";
import Flag from "react-world-flags";
import {
    ChevronDown,
    ChevronUp
} from "lucide-react";
import languageSet from "../sets/languageSet";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type Language = "Čeština" | "English" | "Deutsch";
type languageSwitcherProps = {
    className?: string;
    children?: ReactNode;
};

const LanguageSwitcher = ({ ...props }: languageSwitcherProps) => {
    const [languageSwitcherClicked, setLanguageSwitcherClicked] = useState<boolean>(false);
    
    const {
        language,
        setLanguage
    } = useLanguage();

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className} bg-gray-700 fixed
            ${String(className).includes("top-") ? className : "top-4"}
            ${languageSwitcherClicked ? "flex" : "hidden"}
            flex flex-col rounded-md group language-switcher-wrapper`)}>
                <Wrapper
                className={clsx(`
                ${language === "Čeština" && "bg-black/30"}
                flex justify-between items-center gap-2 md:gap-3 p-1 cursor-pointer hover:bg-black/30 group-hover:border-b group-hover:border-gray-500`)}
                attributes={{
                    onClick: () => (
                        setLanguage("Čeština")
                    )
                }}
                >
                    {
                        languageSwitcherClicked ? (
                            <Fragment>
                                <ChevronUp
                                className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                onClick={(e) => {
                                    setLanguageSwitcherClicked(false);
                                }}
                                />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <ChevronDown
                                className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                                onClick={(e) => {
                                    setLanguageSwitcherClicked(true);
                                }}
                                />
                            </Fragment>
                        )
                    }
                    <p className="text-sm text-gray-300">
                        Čeština
                    </p>
                    <Flag
                    className="h-8 w-8"
                    code="cz"
                    />
                </Wrapper>
                <Wrapper className={clsx(`
                ${language === "English" && "bg-black/30"}
                hidden justify-between items-center gap-2 md:gap-1 border-b border-gray-500 p-1 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black/30 group-hover:flex`)}
                attributes={{
                    onClick: () => setLanguage("English")
                }}>
                    <p className="text-sm text-gray-300">
                        English
                    </p>
                    <Flag
                    className="h-8 w-8"
                    code="gb"
                    />
                </Wrapper>
                <Wrapper className={clsx(`
                ${language === "Deutsch" && "bg-black/30"}
                hidden justify-between items-center gap-2 md:gap-1 p-1 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black/30 group-hover:flex`)}
                attributes={{
                    onClick: () => setLanguage("Deutsch")
                }}
                >
                    <p className="text-sm text-gray-300">
                        Deutsch
                    </p>
                    <Flag
                    className="h-8 w-8"
                    code="de"
                    />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default LanguageSwitcher;