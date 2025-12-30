import { classNames } from "shared/lib/classNames/classNames.js";

import cls from "./Text.module.scss";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export function Text({
    className, title, text, theme = TextTheme.PRIMARY,
}: TextProps) {
    return (
        <div className={classNames(cls.Text, [className], { [cls[theme]]: true })}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
}
