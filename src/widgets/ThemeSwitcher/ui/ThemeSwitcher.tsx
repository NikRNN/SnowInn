import { UseTheme, Theme } from "app/providers/ThemeProvider/index.js";
import { classNames } from "shared/lib/classNames/classNames.js";
import LightIcon from "shared/assets/icons/light-theme.svg";
import DarkIcon from "shared/assets/icons/dark-theme.svg";

import { Button } from "shared/ui/Button/Button.js";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = UseTheme();

    return (
        <Button
            className={classNames("", [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}
