import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "../types/article";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";

const initialState : ArticleDetailsSchema = {
    isLoading: false,
    error: undefined,
    data: undefined,
};

const articleSlice = createSlice({
    name: "articleDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                console.log("pend");
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action : PayloadAction<Article>) => { // для action указан тип, который ожидаю на вход
                state.isLoading = false;
                state.error = undefined;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },

});

export const { actions: ArticleActions } = articleSlice;
export const { reducer: ArticleReducer } = articleSlice;
