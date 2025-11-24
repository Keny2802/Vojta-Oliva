import {
    Fragment,
    ReactNode
} from "react";
import {
    useTheme
} from "../context/ThemeContext";
import clsx from "clsx";
import dynamic from "next/dynamic";

type yearProps = {
    className?: string;
    children?: ReactNode;
};

const dynamicYear = new Date().getFullYear();

const Year = ({ ...props }: yearProps) => {
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
            {
                theme === "Dark" ? (
                    <Fragment>
                        <p className={clsx(`${className || ""} text-gray-300 dynamic-year`)}>
                            {dynamicYear}
                        </p>
                    </Fragment>
                ) : (
                    <Fragment>
                        <p className={clsx(`${className || ""} text-black dynamic-year`)}>
                            {dynamicYear}
                        </p>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Year;