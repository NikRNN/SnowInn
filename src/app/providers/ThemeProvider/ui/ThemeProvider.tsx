/* eslint-disable react/function-component-definition */
import {
    FC, ReactNode, useMemo, useState,
} from "react";

import {
    ThemeContext,
    Theme,
    LOCAL_STORAGE_THEME_KEY,
} from "../lib/themeContext.js";

// внизу и далее initialTheme нужен только для тестов; без нее в тестах всегда light; для тестов добавить в вызов useState initialTheme
interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: Theme;
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
