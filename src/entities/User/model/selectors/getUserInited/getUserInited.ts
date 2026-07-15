import type { StateSchema } from "app/providers/StoreProvider/config/types";

export const getUserInited = (state: StateSchema) => state.user.initedUser;
