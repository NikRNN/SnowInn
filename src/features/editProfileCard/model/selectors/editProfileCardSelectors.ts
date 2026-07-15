import type { StateSchema } from "app/providers/StoreProvider/config/types";

export const getProfileData = (state : StateSchema) => state.profile?.data;
export const getProfileError = (state : StateSchema) => state.profile?.error;
export const getProfileForm = (state : StateSchema) => state.profile?.dataForm;
export const getProfileisLoading = (state : StateSchema) => state.profile?.isLoading;
export const getProfileReadOnly = (state : StateSchema) => state.profile?.readonly;
export const getProfileValidateError = (state : StateSchema) => state.profile?.validateError;