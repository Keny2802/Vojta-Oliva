import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

type wrapperProps = {
    attributes?: React.HTMLAttributes<HTMLDivElement>;
    className?: string;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: wrapperProps) => {
    const {
        attributes,
        className,
        children
    } = props;

    return (
        <Fragment>
            <div
            {...attributes}
            className={clsx(`${className || ""}`)}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;