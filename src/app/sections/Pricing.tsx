"use client";

import {
    useState,
    Fragment,
    ReactNode
} from "react";
import {
    Sparkle,
    CheckCircle
} from "lucide-react";
import clsx from "clsx";
import pricingOptionsSet from "../sets/pricingOptionsSet";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";
import HelpHint from "../components/HelpHint";

type pricingProps = {
    className?: string;
    children?: ReactNode;
};

const Pricing = ({ ...props }: pricingProps) => {
    const [selectedService, setSelectService] = useState<boolean>(false);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [addedService, addService] = useState<number[]>([]);
    // const [addedService, addService] = useState([{
    //     index: 0,
    //     name: "",
    //     price: 0,
    //     description: "",
    //     howLongItTakes: 0 || ""
    // }]);

    const {
        className,
        children
    } = props;

    const selectService = () => {
    };

    return (
        <Fragment>
            <Wrapper
            className={clsx(`${className || ""} border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] pricing-wrapper`)}
            attributes={{
                id: "cenik"
            }}>
                <Wrapper className="px-12 md:px-24 py-8 md:py-16 text-white">
                    <Wrapper className="flex flex-col justify-center items-center">
                        <PageLabel
                        pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                        pageLabelText="Ceník"
                        />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            Ceník
                        </h2>
                        <p className="mt-4 text-base text-center text-gray-300">
                            Ceník, který je dostupný opravdu pro všechny, jak pro jednotlivce tak pro malé firmy.
                        </p>
                    </Wrapper>
                    {/* udělat komponenty na form group form field form wrapper a další */}
                    {/* items-center */}
                    
                    
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Pricing;