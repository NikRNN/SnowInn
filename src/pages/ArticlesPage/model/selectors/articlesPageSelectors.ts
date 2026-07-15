import type { StateSchema } from "app/providers/StoreProvider/config/types";
import { ArticleSortField, ArticleType } from "entities/Article/model/const/consts";
import { ArticleTypeView } from "entities/Article";

export const getArticleListError = (state : StateSchema) => state.articlesList?.error;
export const getArticleListIsLoading = (state : StateSchema) => state.articlesList?.isLoading;
export const getArticleListView = (state : StateSchema) => state.articlesList?.view || ArticleTypeView.LIST;
export const getArticleListLimit = (state : StateSchema) => state.articlesList?.limit || 10;
export const getArticleListPageNum = (state : StateSchema) => state.articlesList?.page || 1;
export const getArticleListHasMore = (state : StateSchema) => state.articlesList?.hasMore;
// eslint-disable-next-line
export const getArticleListIsInited = (state : StateSchema) => state.articlesList?._inited;

export const getArticlesListOrder = (state : StateSchema) => state.articlesList?.order ?? "asc";
export const getArticlesListSort = (state: StateSchema) => state.articlesList?.sort ?? ArticleSortField.VIEWS;
export const getArticlesListSearch = (state : StateSchema) => state.articlesList?.search ?? "";
export const getArticlesListType = (state : StateSchema) => state.articlesList?.type ?? ArticleType.ALL;
