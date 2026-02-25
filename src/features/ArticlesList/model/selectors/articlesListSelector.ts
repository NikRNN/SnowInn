import { StateSchema } from "app/providers/StoreProvider";
import { ArticleTypeView } from "entities/Article";

export const getArticleListError = (state : StateSchema) => state.articlesList?.error;
export const getArticleListIsLoading = (state : StateSchema) => state.articlesList?.isLoading;
export const getArticleListView = (state : StateSchema) => state.articlesList?.view || ArticleTypeView.LIST;
