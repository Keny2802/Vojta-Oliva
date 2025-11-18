import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";
import dynamic from "next/dynamic";

type yearProps = {
    className?: string;
    children?: ReactNode;
};

const dynamicYear = new Date().getFullYear();

const Year = ({ ...props }: yearProps) => {
    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <p className={clsx(`${className || ""} dynamic-year`)}>
                {dynamicYear}
            </p>
        </Fragment>
    );
};

export default Year;