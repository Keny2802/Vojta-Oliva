import {
    Fragment,
    CSSProperties,
    ReactNode
} from "react";
import clsx from "clsx";

type wrapperProps = {
    attributes?: React.HTMLAttributes<HTMLDivElement>;
    className?: string;
    id?: string;
    ref?: React.Ref<HTMLDivElement>;
    onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
    OnMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    style?: CSSProperties;
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