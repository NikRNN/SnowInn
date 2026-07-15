import type { StateSchema } from "app/providers/StoreProvider/config/types";

export const getArticleRecommendationsIsLoading = (state : StateSchema) => state.articleDetailsPage?.comments.isLoading;
export const getArticleRecommendationsError = (state : StateSchema) => state.articleDetailsPage?.comments.error;
