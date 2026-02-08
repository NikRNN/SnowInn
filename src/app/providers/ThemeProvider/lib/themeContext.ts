import { createContext } from "react";

export enum Theme {
  LIGHT = "app_light",
  DARK = "app_dark",
  SUNSET = "app_sunset"
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.LIGHT,
    setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = "theme";
