"use client";

import {
    Fragment,
    ReactNode
} from "react";
import {
    usePathname
} from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

import Wrapper from "./Wrapper";

type logoProps = {
    className?: string;
    children?: ReactNode;
};

const Logo = ({ ...props }: logoProps) => {
    const pathName = usePathname();
    const isHome = pathName === "/";

    const {
        className,
        children
    } = props;

    return (
        <Fragment>
            <Wrapper className={clsx(`${className || ""} logo-wrapper`)}>
                <Link
                href={`${isHome ? "" : "/"}`}
                className="text-xl md:text-2xl font-black cursor-pointer">
                    {/* newWeb */}
                    {/* Vojta Oliva */}
                    <Image
                    // height={300}
                    // width={300}
                    width={75}
                    height={75}
                    src={`/fotky/logo/clean logo 1.png`}
                    alt="Vojta Oliva Logo"
                    loading="lazy"
                    decoding="async"
                    />
                </Link>
            </Wrapper>
        </Fragment>
    );
};

export default Logo;