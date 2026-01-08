import { lazy, FC } from "react";
import type { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy < FC<LoginFormProps>>(() =>
// eslint-disable-next-line
    // @ts-ignore 
    // eslint-disable-next-line
    new Promise((resolve) => {
        setTimeout(() => resolve(import("./LoginForm")), 1500);
    }));
