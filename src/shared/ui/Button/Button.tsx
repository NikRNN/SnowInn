import { classNames } from "shared/lib/classNames/classNames.js";
import { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export function Button(props: ButtonProps) {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, [className], { ...(theme ? { [cls[theme]]: true } : {}) })}
            {...otherProps} // сделал предупреждение вместо ошибки
        >
            {children}
        </button>
    );
}
