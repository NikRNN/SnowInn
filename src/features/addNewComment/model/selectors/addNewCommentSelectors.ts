import type { StateSchema } from "app/providers/StoreProvider/config/types";

export const getAddNewCommentText = (state:StateSchema) => state.addNewComment?.text;
export const getAddNewCommentError = (state: StateSchema) => state.addNewComment?.error;

