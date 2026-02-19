import { StateSchema } from "app/providers/StoreProvider";

export const getSideBarProfileId = (state:StateSchema) => state.user.authData?.id;
