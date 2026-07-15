import { EntityState } from "@reduxjs/toolkit";
import type { Article } from "entities/Article/model/index";

export interface ArticleDetailsRecommendedSchema extends EntityState<Article, string> {
    isLoading?: boolean,
    error?: string,
}
