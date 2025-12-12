"use client";

import {
    useState,
    Fragment
} from "react";
import {
    AnimatePresence,
    motion
} from "framer-motion";

import Logo from "./Logo";

const LoadingScreen = () => {
    const [isLoadingButtonClicked, setLoadingButtonClicked] = useState<boolean>(false);

    return (
        <Fragment>
            <AnimatePresence>
                {
                    !isLoadingButtonClicked && (
                        <Fragment>
                            <motion.div
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                            className="p-4 md:p-5 lg:p-6 fixed inset-0 flex justify-center items-center flex-col h-screen z-9999 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]">
                                <Logo />
                                <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-3xl md:text-4xl lg:text-6xl text-center text-white font-black max-w-[865px] drop-shadow-xl">
                                    Tvořím moderní weby pro malé podniky a živnostníky za výhodné ceny.
                                </motion.h1>
                                <motion.button
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="p-2 md:p-3 lg:p-4 mt-4 md:mt-6 lg:mt-8 bg-white text-black w-full md:w-[250px] h-[55px] md:h-[70px] rounded-xl cursor-pointer transition-colors duration-300 ease-in-out hover:bg-black hover:text-white"
                                onClick={(e) => {
                                    setLoadingButtonClicked(true);
                                }}>
                                    Prohlédnout můj web
                                </motion.button>
                            </motion.div>
                        </Fragment>
                    )
                }
            </AnimatePresence>
        </Fragment>
    );
};

export default LoadingScreen;