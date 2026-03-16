import { StateSchema } from "app/providers/StoreProvider";
import { ArticleTypeView } from "entities/Article";

export const getArticleListError = (state : StateSchema) => state.articlesList?.error;
export const getArticleListIsLoading = (state : StateSchema) => state.articlesList?.isLoading;
export const getArticleListView = (state : StateSchema) => state.articlesList?.view || ArticleTypeView.LIST;
export const getArticleListLimit = (state : StateSchema) => state.articlesList?.limit || 9;
export const getArticleListPageNum = (state : StateSchema) => state.articlesList?.page || 1;
export const getArticleListHasMore = (state : StateSchema) => state.articlesList?.hasMore;
// eslint-disable-next-line
export const getArticleListIsInited = (state : StateSchema) => state.articlesList?._inited;
