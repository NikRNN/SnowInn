import type { StateSchema } from "app/providers/StoreProvider/config/types";

export const getLoginState = (state : StateSchema) => state.loginForm ?? {
    username: "",
    password: "",
    isLoading: false,
    error: null,
};
