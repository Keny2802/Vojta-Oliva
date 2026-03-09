import {
    ReactNode,
    Fragment,
} from "react";
import clsx from "clsx";

type HeadingType = {
    className?: string;
    children: ReactNode;
};

const Heading = ({ ...props } : HeadingType) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <h2 className={clsx(className, "text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-relaxed")}>
                {children}
            </h2>
        </Fragment>
    );
};

export default Heading;