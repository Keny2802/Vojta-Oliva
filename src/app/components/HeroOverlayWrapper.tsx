import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type heroOverlayWrapperProps = {
    className?: string;
    children?: ReactNode;
};

const HeroOverlayWrapper = ({ ...props }: heroOverlayWrapperProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`
            ${className || ""}
            ${String(className).includes("text-")
            || String(className).includes("text-[") ? className : "text-white"}
            flex flex-col justify-center items-center
            text-center max-w-6xl mx-auto`)}
            >
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default HeroOverlayWrapper;