import { classNames, Mods } from "shared/lib/classNames/classNames.js";

import { memo } from "react";
import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
    MAIN = "main",
}

export enum TextPosition {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}

export enum TextSize {
    M = "size_m",
    L = "size_l",
    S = "size_s",
    XL = "size_xl",
    XL_SECONDARY_FONT = "size_xl_secondary_font"
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  position?: TextPosition;
  size?: TextSize
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4"

const mapSizeToHeaderTag : Record <TextSize, HeaderTagType> = {
    [TextSize.XL] : "h1",
    [TextSize.XL_SECONDARY_FONT]: "h1",
    [TextSize.L]: "h2",
    [TextSize.M]: "h3",
    [TextSize.S]: "h4"
}



export const Text = memo(
    ({
        className, title, text, theme = TextTheme.PRIMARY, position = TextPosition.CENTER, size = TextSize.S,
    }: TextProps) => {
        const mods : Mods = {
            [cls[theme]]: true,
            [cls[position]]: true,
            [cls[size]]: true,
        };

        const HeaderTag = mapSizeToHeaderTag[size]

        return (
            <div className={classNames(cls.Text, [className], mods)}>
                {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
                {text && <p className={cls.text}>{text}</p>}
            </div>

        );
    },

);
