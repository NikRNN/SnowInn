import { UseTheme, Theme } from "app/providers/ThemeProvider/index.js";
import { classNames } from "shared/lib/classNames/classNames.js";
import { memo } from "react";
import { IconWrapper } from "shared/ui/IconWrapper/IconWrapper";
import cls from "./ThemeSwitcher.module.scss";
import MoonIcon from "../../../shared/assets/icons/moon-20-20.svg";
import SunIcon from "../../../shared/assets/icons/sun-20-20.svg";

const Moon = MoonIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
const Sun = SunIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

export interface ThemeSwitcherProps {
  className?: string;
  collapsed?: boolean;
}

export const ThemeSwitcher = memo(
    ({ className, collapsed }: ThemeSwitcherProps) => {
        const { theme, toggleTheme } = UseTheme();

        const checkbox = (
            <label
                aria-label="Переключить тему"
                htmlFor="theme-switch"
                className={classNames(cls.themeSwitcher, [className])}
            >
                <input
                    checked={theme === Theme.LIGHT}
                    type="checkbox"
                    id="theme-switch"
                    onChange={toggleTheme}
                />
            </label>
        );

        const fullView = (
            <div>
                <IconWrapper className={cls.moons} Svg={Moon} />
                {checkbox}
                <IconWrapper className={cls.sun} Svg={Sun} />
            </div>
        );

        const compactView = <div>{checkbox}</div>;

        return (
            <div>
                {collapsed ? compactView : fullView}
            </div>
        );
    },
);
