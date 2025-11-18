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
                    <Wrapper className="mt-4 flex justify-center items-center flex-col md:flex-row gap-4">
                        <Wrapper className="w-full md:w-1/2 p-4 bg-black/30 border border-gray-500 rounded-md">
                            <h3 className="text-xl">
                                Přidejte volitelné
                                {/* funkce */}
                            </h3>
                            <p className="mt-2 pb-4 text-base text-gray-300 border-b border-gray-500">
                                Přidejte
                                {/* ty */}
                                {" "}
                                služby,
                                {/* funkce, */}
                                {" "}
                                které chcete aby byli na Vaší budoucí webové stránce.
                            </p>
                            <Wrapper className="mt-4">
                                <Wrapper className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    {/* udělat set a jenom to vymapovat */}
                                    {/* filtr a pod sekce */}
                                    {
                                        pricingOptionsSet.map((pricingOption, pricingOptionIndex) => (
                                            <Fragment key={pricingOptionIndex}>
                                                {/* slate-800 */}
                                                <Wrapper className="bg-black/40 border border-gray-500 rounded-md p-4">
                                                    {/* <PageLabel
                                                    className="mb-3 p-2.5 w-max flex ml-auto bg-gray-800"
                                                    pageLabelText={pricingOption.name}/> */}
                                                    <Wrapper className="flex justify-between items-center gap-4 border-b border-gray-500 pb-2">
                                                        <Wrapper className={clsx(`px-[3px] py-1 h-8 w-8 bg-black/30 border border-gray-500 rounded-md cursor-pointer`)}
                                                        attributes={{
                                                            onClick: () => {
                                                                setCurrentIndex(pricingOptionIndex);
                                                                setSelectService(prev => !prev)
                                                                addService((prev) => (
                                                                    prev.includes(pricingOptionIndex)
                                                                    ? prev.filter((prevIndex) => prevIndex !== pricingOptionIndex)
                                                                    : [...prev, pricingOptionIndex]
                                                                ));
                                                                // addService(
                                                                //     [{
                                                                //         index: pricingOptionIndex,
                                                                //         name: pricingOption.name,
                                                                //         price: pricingOption.price,
                                                                //         description: pricingOption.description,
                                                                //         howLongItTakes: String(pricingOption.howLongItTakes)
                                                                //     }]
                                                                // );
                                                            }
                                                        }}>
                                                            {
                                                                addedService.includes(pricingOptionIndex) && (
                                                                    <Fragment>
                                                                        <CheckCircle className="text-green-500" />
                                                                    </Fragment>
                                                                )
                                                            }
                                                            {/* {
                                                                addedService.includes(({index}) => index) && (
                                                                    <Fragment>
                                                                        <CheckCircle className="text-green-500" />
                                                                    </Fragment>
                                                                )
                                                            } */}
                                                        </Wrapper>
                                                        <p className="text-base text-gray-200">
                                                            {pricingOption.name}
                                                        </p>
                                                        <p className="text-base text-gray-200">
                                                            +{pricingOption.price} Kč
                                                        </p>
                                                    </Wrapper>
                                                    <Wrapper className="flex flex-col gap-2">
                                                        <p className="mt-2 text-sm text-gray-300">
                                                            {pricingOption.description}
                                                        </p>
                                                        <HelpHint className="flex justify-end" />
                                                        <p className="text-sm text-gray-300">
                                                            Doba trvání: {Number(pricingOption.howLongItTakes) ? `${pricingOption.howLongItTakes} hodiny` : pricingOption.howLongItTakes}
                                                        </p>
                                                    </Wrapper>
                                                </Wrapper>
                                            </Fragment>
                                        ))
                                    }
                                </Wrapper>
                                {
                                    addedService.length ? (
                                        <Fragment>
                                            <button
                                            className="mt-4 bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-lg font-black uppercase"
                                            onClick={(e) => {
                                                if (addedService) {
                                                    addService([]);
                                                };
                                            }}>
                                                Odebrat vybrané služby
                                            </button>
                                        </Fragment>
                                    ) : null
                                }
                            </Wrapper>
                        </Wrapper>
                        <Wrapper className="w-full md:w-1/3 p-4 bg-black/30 border border-gray-500 rounded-md">
                                <h3 className="text-xl">
                                    Souhrn vybraných služeb
                                </h3>
                                <p className="mt-2 pb-4 text-base text-gray-300 border-b border-gray-500">
                                    Zde uvidíte souhrn Vašich dosud vybraných služeb.
                                </p>
                                <Wrapper className="adding-services-wrapper">
                                    {
                                        addedService ? (
                                            <Fragment>
                                                {/* {addedService.map((service) => service)} */}
                                            </Fragment>
                                        ) : (
                                            <Fragment>
                                                <p className="mt-4 text-center text-sm text-gray-300">
                                                    Zatím nemáte žádné vybrané služby
                                                </p>
                                            </Fragment>
                                        )
                                    }
                                </Wrapper>
                               {
                                    addedService.length ? (
                                        <Fragment>
                                             <button className="mt-4 bg-blue-600 w-full rounded-md px-3 py-2 cursor-pointer text-lg font-black uppercase">
                                                {/* počet služeb */}
                                                {
                                                    addedService.length >= 5 && `Objednat ${addedService.length} služeb`
                                                }
                                                {
                                                    addedService.length < 5 && addedService.length !== 1 && `Objednat ${addedService.length} služby`
                                                }
                                                {
                                                    addedService.length === 1 && `Objednat ${addedService.length} službu`
                                                }
                                            </button>
                                        </Fragment>
                                    ) : null
                               }
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default Pricing;