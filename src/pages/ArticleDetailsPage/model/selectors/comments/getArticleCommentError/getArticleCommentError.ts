import type { StateSchema } from "app/providers/StoreProvider/config/types";

export const getArticleCommentError = (state : StateSchema) => state.articleDetailsPage?.comments.error;
