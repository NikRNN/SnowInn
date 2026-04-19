import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";

export const getCanEditArticle = createSelector(getUserAuthData, getArticleDetailsData, (article, user) => {
    if (!article || !user) {
        return false;
    }
    return user.id === article.id;
});
