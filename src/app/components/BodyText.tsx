import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

type BodyTextType = {
    className?: string;
    children: ReactNode;
};

const BodyText = ({ ...props }: BodyTextType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <p className={clsx(className, "text-[15px] md:text-[15.5px] lg:text-base max-w-3xl")}>
                {children}
            </p>
        </Fragment>
    );
};

export default BodyText;