"use client";

import {
    Fragment
} from "react";
import {
    Sparkle
} from "lucide-react";
import Link from "next/link";

import Wrapper from "../components/Wrapper";
import PageLabel from "../components/PageLabel";
import setLinkWithoutHash from "../functions/setLinkWithoutHash";

const References = () => {
    return (
        <Fragment>
            <Wrapper
            className="border-t border-gray-500 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a]"
            attributes={{
                id: "reference"
            }}>
                <Wrapper className="px-4 md:px-24 py-4 md:py-16 text-white">
                    <Wrapper className="flex flex-col justify-center items-center">
                        <PageLabel
                        pageLabelAdditContent={<Sparkle className="text-fuchsia-300" />}
                        pageLabelText="Reference" />
                        <h2 className="text-3xl md:text-5xl font-black uppercase">
                            2 Reference
                        </h2>
                        <p className="mt-4 text-base text-center text-gray-300">
                            Reference, je potvrzení důvěryhodnosti.
                        </p>
                    </Wrapper>
                    <Wrapper className="mt-6 flex justify-center">
                        <p className="text-xl text-gray-500">
                            🤷🏼 Zatím žádné reference nemám.
                        </p>
                    </Wrapper>
                    <Wrapper className="mt-2 flex justify-center py-10">
                        <p className="p-2 text-center text-sm text-gray-500">
                            Máte na mě dotaz? Neváhejte mne
                            {" "}
                            <Link
                            href={`#kontakt`}
                            className="border-b border-gray-500"
                            onClick={(e) => {
                                setLinkWithoutHash(e, "kontakt");
                            }}>
                                kontaktovat.
                            </Link>
                        </p>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
        </Fragment>
    );
};

export default References;