"use client";

import {
    useState,
    createContext,
    useContext,
    Fragment,
    ReactNode
} from "react";

type Theme = "Dark" | "Light";
type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>("Dark");

    return (
        <Fragment>
            <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}>
                {children}
            </ThemeContext.Provider>
        </Fragment>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("Context needs to be inside theme provider.");
    };

    return context;
};