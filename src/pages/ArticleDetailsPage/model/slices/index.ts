import { combineReducers } from "@reduxjs/toolkit";
import { articleDetailsPageCommentsReducer } from "./articleDetailsPageCommentSlice/articleDetailsPageCommentsSlice";
import { articleDetailsPageRecommendedReducer } from "./articleDetailsPageRecommendedSlice/articleDetailsPageRecommendedSlice";

export const articleDetailsPageReducer = combineReducers({
    comments: articleDetailsPageCommentsReducer,
    recommendations: articleDetailsPageRecommendedReducer,
});
