import type { StateSchema } from "app/providers/StoreProvider/config/types";

export const getArticleCommentIsLoading = (state : StateSchema) => state.articleDetailsPage?.comments.isLoading
