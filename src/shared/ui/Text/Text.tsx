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

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  position?: TextPosition;
}

export const Text = memo(
    ({
        className, title, text, theme = TextTheme.PRIMARY, position = TextPosition.CENTER,
    }: TextProps) => {
        const mods : Mods = {
            [cls[theme]]: true,
            [cls[position]]: true,
        };

        return (
            <div className={classNames(cls.Text, [className], mods)}>
                {title && <p className={cls.title}>{title}</p>}
                {text && <p className={cls.text}>{text}</p>}
            </div>

        );
    },

);
