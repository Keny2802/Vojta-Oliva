import {
    Fragment,
    ReactNode
} from "react";

import Wrapper from "./Wrapper";
import Logo from "./Logo";

const Footer = () => {
    return (
        <Fragment>
            <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-gray-300 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] border-t border-gray-500 footer-wrapper">
                <Wrapper className="flex flex-col justify-center items-center">
                    <Logo />
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Footer;