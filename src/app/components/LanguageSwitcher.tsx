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
import clsx from "clsx";

import Wrapper from "./Wrapper";

type languageProps = "Čeština" | "English" | "Deutsch";

type languageSwitcherProps = {
    className?: string;
    // language: languageProps;
    // setLanguage: (language: languageProps) => void;
    children?: ReactNode;
};

const LanguageSwitcher = ({ ...props }: languageSwitcherProps) => {
    const {
        language,
        setLanguage
    } = useLanguage();

    const {
        className,
        // language,
        // setLanguage,
        children
    } = props;

    const [isChevronClicked, setChevronClicked] = useState<boolean>(false);
    const [isChevronHovered, setChevronHovered] = useState<boolean>(false);
    const [isCzechSwitcherClicked, setCzechSwitcherClicked] = useState<boolean>(false);
    // const [languageSwitcherState, setLanguageSwitcherState] = useState<"Čeština" | "English" | "Deutsch">("Čeština");
    
    // const {
    //     language,
    //     setLanguage
    // } = useLanguage();

    return (
        <Fragment>
            {/* absolute top-4 z-10 */}
            <Wrapper className={clsx(`${className} bg-gray-700 fixed
            ${String(className).includes("top-") ? className : "top-4"}
            flex flex-col rounded-md group language-switcher-wrapper`)}>
                <Wrapper
                className={clsx(`${language === "Čeština" && "bg-black/30"} flex justify-between items-center gap-2 md:gap-3 p-1 cursor-pointer hover:bg-black/30 group-hover:border-b group-hover:border-gray-500`)}
                attributes={{
                    onClick: () => setLanguage("Čeština")
                }}
                >
                    <ChevronDown
                    className="cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#f8aa0e]"
                    />
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
                }}
                >
                    {/* <ChevronDown className="cursor-pointer" /> */}
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
                {/* <Wrapper className={clsx(`
                ${languageSwitcherState === "English" && "bg-black/30 order-1"}
                opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 language-child-switcher-wrapper`)}
                attributes={{
                    onClick: () => setLanguageSwitcherState("English")
                }}
                >
                    <Wrapper className="hidden justify-between items-center gap-2 md:gap-1 border-b border-gray-500 p-1 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black/30 group-hover:flex">
                        <p className="text-sm text-gray-300">
                            English
                        </p>
                        <Flag
                        className="h-8 w-8"
                        code="gb"
                        />
                    </Wrapper>
                    <Wrapper className={clsx(`
                    ${languageSwitcherState === "Deutsch" && "bg-black/30"}
                    hidden justify-between items-center gap-2 md:gap-1 p-1 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black/30 group-hover:flex`)}
                    attributes={{
                        onClick: () => setLanguageSwitcherState("Deutsch")
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
                </Wrapper> */}
            </Wrapper>
        </Fragment>
    );
};

export default LanguageSwitcher;