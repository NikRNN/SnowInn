import type { StateSchema } from "app/providers/StoreProvider/config/types";

export const getSideBarProfileId = (state:StateSchema) => state.user.authData?.id;
