import { classNames, Mods } from "shared/lib/classNames/classNames.js";

import { memo } from "react";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

export enum TextPosition {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}

export enum TextSize {
    M = "size_m",
    L = "size_l",
    S = "size_s"
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  position?: TextPosition;
  size?: TextSize
}

export const Text = memo(
    ({
        className, title, text, theme = TextTheme.PRIMARY, position = TextPosition.CENTER, size = TextSize.M,
    }: TextProps) => {
        const mods : Mods = {
            [cls[theme]]: true,
            [cls[position]]: true,
            [cls[size]]: true,
        };

        return (
            <div className={classNames(cls.Text, [className], mods)}>
                {title && <p className={cls.title}>{title}</p>}
                {text && <p className={cls.text}>{text}</p>}
            </div>

        );
    },

);
