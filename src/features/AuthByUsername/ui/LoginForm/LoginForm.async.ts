import { lazy, FC } from "react";
import type { LoginFormProps } from "./LoginForm";

export const LoginFormAsync = lazy <FC<LoginFormProps>>(() => (import("./LoginForm")));
