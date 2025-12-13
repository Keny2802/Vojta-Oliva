import {
    useState,
    useEffect,
    Fragment
} from "react";

import Wrapper from "./Wrapper";

interface typingEffectType {
    typingText: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
};

const TypingEffect = ({ ...props }: typingEffectType) => {
    const [text, showText] = useState<string>("");

    useEffect(() => {
        let typingIndex = 0;

        const typingInterval = setInterval(() => {
            showText(props.typingText.substring(0, typingIndex));
            typingIndex++;

            if (typingIndex > props.typingText.length) {
                clearInterval(typingInterval);
            };
        }, props.typingSpeed);

        return () => {
            clearInterval(typingInterval);
        };
    }, [props.typingText, props.typingSpeed]);

    return (
        <Fragment>
            <Wrapper>
                <p className="mt-4 md:mt-6 lg:mt-8 text-base md:text-lg lg:text-xl font-semibold">
                    {text}
                </p>
            </Wrapper>
        </Fragment>
    );
};

export default TypingEffect;