import { StateSchema } from "app/providers/StoreProvider";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";

export const getArticlesListOrder = (state : StateSchema) => state.articlesList?.order ?? "asc";
export const getArticlesListSort = (state: StateSchema) => state.articlesList?.sort ?? ArticleSortField.VIEWS;
export const getArticlesListSearch = (state : StateSchema) => state.articlesList?.search ?? "";
export const getArticlesListType = (state : StateSchema) => state.articlesList?.type ?? ArticleType.ALL;
