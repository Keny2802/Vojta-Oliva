import {
    Fragment,
    ReactNode
} from "react";
import {
    useTheme
} from "../context/ThemeContext";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type pageLabelProps = {
    className?: string;
    pageLabelAdditContent?: ReactNode | null;
    pageLabelText: string;
    pageLabelTextClassName?: string;
    children?: ReactNode | null;
};

const PageLabel = ({ ...props }: pageLabelProps) => {
    const {
        theme,
        setTheme
    } = useTheme();

    const {
        className,
        pageLabelAdditContent,
        pageLabelText,
        pageLabelTextClassName,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`
            ${className || ""}
            ${String(className).includes("bg-") || String(className).includes("bg-[") ? className : "bg-[#171717]/40"}
            ${String(className).includes("mb-") ? className : "mb-6"}
            ${String(className).includes("p-") || String(className).includes("px-") || String(className).includes("py-") ? className : "px-4 py-3"}
            ${theme === "Light" && "bg-black/80"}
                rounded-full`)}>
                <p className={clsx(`${pageLabelTextClassName || ""} ${pageLabelAdditContent ? "flex items-center gap-2" : null} page-label-text`)}>
                    {pageLabelAdditContent}
                    {pageLabelText}
                </p>
            </Wrapper>
        </Fragment>
    );
};

export default PageLabel;