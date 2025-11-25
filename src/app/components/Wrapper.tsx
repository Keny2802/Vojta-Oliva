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
    onMouseMove?: any;
    OnMouseEnter?: any;
    onMouseLeave?: any;
    style?: any;
    children?: ReactNode;
};

const Wrapper = ({ ...props }: wrapperProps) => {
    const {
        attributes,
        className,
        id,
        ref,
        onMouseMove,
        OnMouseEnter,
        onMouseLeave,
        style,
        children
    } = props;

    return (
        <Fragment>
            <div
            {...attributes}
            className={clsx(`${className || ""}`)}
            id={id}
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseEnter={OnMouseEnter}
            onMouseLeave={onMouseLeave}
            style={style}
            >
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;