import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Logo from "./Logo";

type poweredProps = {
    className?: string;
    children?: ReactNode;
};

const Powered = ({ ...props }: poweredProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} flex items-center gap-2 powered`)}>
                <span className="powered">
                    Powered by
                </span>
                <Logo />
            </Wrapper>
        </Fragment>
    );
};

export default Powered;