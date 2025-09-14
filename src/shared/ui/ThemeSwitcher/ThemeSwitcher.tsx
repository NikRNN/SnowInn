import { UseTheme } from "app/providers/ThemeProvider/index.js";
import { classNames } from "shared/lib/classNames/classNames.js";
import LightIcon from "shared/assets/icons/light-theme.svg";
import DarkIcon from "shared/assets/icons/dark-theme.svg";
import { Theme } from "app/providers/ThemeProvider/index.js";
import { Button } from "shared/ui/Button/Button.js";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = UseTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
