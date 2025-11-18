import {
    Fragment,
    ReactNode
} from "react";
import {
    Info
} from "lucide-react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type helpHintProps = {
    className?: string;
    children?: ReactNode;
};

const HelpHint = ({ ...props }: helpHintProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className}`)}>
                <Info className="h-5 w-5 cursor-pointer" />
            </Wrapper>
        </Fragment>
    );
};

export default HelpHint;