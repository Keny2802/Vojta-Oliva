import {
    Fragment,
    ReactNode
} from "react";
import {
    useTheme
} from "../context/ThemeContext";
import clsx from "clsx";

import Wrapper from "./Wrapper";
import Logo from "./Logo";

type poweredProps = {
    className?: string;
    children?: ReactNode;
};

const Powered = ({ ...props }: poweredProps) => {
    const {
        theme,
        setTheme
    } = useTheme();

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} flex items-center gap-2 powered`)}>
                {
                    theme === "Dark" ? (
                        <span className="text-gray-300 powered">
                            Powered by
                        </span>
                    ) : (
                        <span className="text-black powered">
                            Powered by
                        </span>
                    )
                }
                <Logo className="h-14 w-14" />
            </Wrapper>
        </Fragment>
    );
};

export default Powered;