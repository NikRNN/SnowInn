import { classNames } from "shared/lib/classNames/classNames.js";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export enum ThemeButton {
  CLEAR = "clear",
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(cls.Button, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
