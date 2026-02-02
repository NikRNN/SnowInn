import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
  OUTLINE_RED = "outline_red",
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
  disabled?: boolean;
}

export function Button(props: ButtonProps) {
    const {
        className,
        children,
        theme = ButtonTheme.OUTLINE,
        square,
        size = SizeButton.M,
        disabled,
        ...otherProps
    } = props;

    const mods : Record <string, boolean | undefined> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,

    };

    return (
        <button
            type="button"
            className={classNames(cls.button, [className], mods)}
            disabled={disabled}
            {...otherProps} // сделал предупреждение вместо ошибки
        >
            {children}
        </button>
    );
}
