import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentError = (state : StateSchema) => state.articleDetailsPage?.comments.error;
