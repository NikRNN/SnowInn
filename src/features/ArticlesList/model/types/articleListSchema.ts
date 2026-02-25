import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleTypeView } from "entities/Article";

export interface ArticlesListSchema extends EntityState<Article, string> {
    isLoading?: boolean,
    error?: string,
    view: ArticleTypeView
}
