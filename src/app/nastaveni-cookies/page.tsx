import {
    Fragment
} from "react";
import {
    cookiePolicySet
} from "../components/CookiePolicySet";

import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import FlexCol from "../components/FlexCol";
import SmallerHeading from "../components/SmallerHeading";
import Heading from "../components/Heading";
import MarginTop from "../components/MarginTop";
import BodyText from "../components/BodyText";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const Page = () => {
    return (
        <Fragment>
            <Header />
            <Wrapper className="p-4 md:p-5 lg:p-6 bg-linear-to-tr from-[#050b1a] via-[#0b1f3b] to-[#12345a] text-white">
                <FlexCol className="gap-3">
                    <Heading>
                        Nastavení cookies (Cookie Policy)
                    </Heading>
                </FlexCol>
                <MarginTop className="lg:mt-6">
                    <FlexCol className="gap-3">
                        {
                            cookiePolicySet.map((block, index) => {
                                const {
                                    title,
                                    text
                                } = block;

                                return (
                                    <Fragment key={index}>
                                        <FlexCol className="gap-2">
                                            <SmallerHeading>
                                                {`${index + 1}. ${title}`}
                                            </SmallerHeading>
                                            <MarginTop >
                                                {
                                                    text.map((textBlock, idx) => {
                                                        return (
                                                            <BodyText
                                                            key={idx}>
                                                                {`${index + 1}.${idx + 1} ${textBlock}`}
                                                            </BodyText>
                                                        );
                                                    })
                                                }
                                            </MarginTop>
                                        </FlexCol>
                                    </Fragment>
                                );
                            })
                        }
                    </FlexCol>
                </MarginTop>
            </Wrapper>
            <Contact />
            <Footer />
        </Fragment>
    );
};

export default Page;