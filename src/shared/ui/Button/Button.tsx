import { classNames } from "shared/lib/classNames/classNames.js";
import { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button(props: ButtonProps) {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, [className, cls[theme]])}
            {...otherProps} // сделал предупреждение вместо ошибки;
        >
            {children}
        </button>
    );
}
