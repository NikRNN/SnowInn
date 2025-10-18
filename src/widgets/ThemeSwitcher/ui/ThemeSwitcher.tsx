import { UseTheme, Theme } from "app/providers/ThemeProvider/index.js";
import { classNames } from "shared/lib/classNames/classNames.js";
import { Button, ThemeButton } from "shared/ui/Button/Button.js";
// import DarkIcon from "../../../shared/assets/icons/dark-theme.svg"; - для dev и prod
// import LightIcon from "../../../shared/assets/icons/light-theme.svg"; - для dev и prod, ниже импорт для тестов
import { DarkIcon } from "widgets/Sidebar/ui/Sidebar/storybook/DarkTheme.js";
import { LightIcon } from "widgets/Sidebar/ui/Sidebar/storybook/LightTheme.js";

interface ThemeSwitcherProps {
  className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = UseTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames("", [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
}
