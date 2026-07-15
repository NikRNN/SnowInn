import type { StateSchema } from "app/providers/StoreProvider/config/types";

export const getUserAuthData = (state: StateSchema) => state.user.authData;
