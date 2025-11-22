// "use client";

// import { createContext, useContext, useState, ReactNode, Fragment } from "react";

// type Language = "Čeština" | "English" | "Deutsch";

// type LanguageContextType = {
//     language: Language;
//     setLanguage: (lang: Language) => void;
// };

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//     const [language, setLanguage] = useState<Language>("Čeština");

//     return (
//         <Fragment>
//             <LanguageContext.Provider value={{ language, setLanguage }}>
//                 {children}
//             </LanguageContext.Provider>
//         </Fragment>
//     );
// };

// export const useLanguage = () => {
//     const context = useContext(LanguageContext);
//     if (!context) {
//         throw new Error("useLanguage must be used inside LanguageProvider");
//     }
//     return context;
// };

// vojto napiš si vlastní context vojto fakt prosím

"use client";

import {
    Fragment,
    useState,
    useContext,
    createContext,
    ReactNode
} from "react";

type Language = "Čeština" | "English" | "Deutsch";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("Čeština");

    return (
        <Fragment>
            <LanguageContext.Provider value={{
                language,
                setLanguage
            }}>
                {children}
            </LanguageContext.Provider>
        </Fragment>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("Language context needs to be used inside language provider.");
    };

    return context;
};