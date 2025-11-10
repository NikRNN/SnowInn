import { classNames } from "shared/lib/classNames/classNames.js";
import { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
  CLEAR_INVERTED = "clearInverted"
}

export enum SizeButton {
    M = "size_m",
    L = "size_l",
    XL = "size_xl"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: SizeButton,
}

export function Button(props: ButtonProps) {
    const {
        className,
        children,
        theme,
        square,
        size = SizeButton.M,
        ...otherProps
    } = props;

    const mods : Record <string, boolean | undefined> = {
        [cls[theme!]]: true,
        [cls.square]: square,
        [cls[size!]]: true,

    };

    return (
        <button
            type="button"
            className={classNames(cls.button, [className], mods)}
            {...otherProps} // сделал предупреждение вместо ошибки
        >
            {children}
        </button>
    );
}
