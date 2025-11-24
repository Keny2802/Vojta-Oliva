import {
    Fragment,
    ReactNode
} from "react";
import clsx from "clsx";

type wrapperProps = {
    attributes?: React.HTMLAttributes<HTMLDivElement>;
    className?: string;
    id?: string;
    ref?: any;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: wrapperProps) => {
    const {
        attributes,
        className,
        id,
        ref,
        children
    } = props;

    return (
        <Fragment>
            <div
            {...attributes}
            className={clsx(`${className || ""}`)}
            id={id}
            ref={ref}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;