import {
    ReactNode,
    Fragment,
} from "react";
import clsx from "clsx";

type props = {
    className?: string;
    children: ReactNode;
};

const SmallerHeading: React.FC<props> = (props: props) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <h3 className={clsx(className, "text-xl md:text-2xl lg:text-[26px] font-bold tracking-relaxed")}>
                {children}
            </h3>
        </Fragment>
    );
};

export default SmallerHeading;