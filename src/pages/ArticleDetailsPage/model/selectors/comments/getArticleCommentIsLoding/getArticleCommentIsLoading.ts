import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentIsLoading = (state : StateSchema) => state.articleDetailsPage?.comments.isLoading
