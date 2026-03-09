import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type MarginTopType = {
    className?: string;
    children: ReactNode;
};

type OptionalMarginTopType = Partial<MarginTopType>;

const MarginTop = ({ ...props }: MarginTopType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`mt-3 md:mt-4 ${className} margin-top-component`)}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default MarginTop;