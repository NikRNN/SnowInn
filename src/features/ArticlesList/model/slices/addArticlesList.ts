import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleTypeView } from "entities/Article";
import { ARTICLE_VIEW_LOCALSTORAGE } from "shared/const/localstorage";
import { ArticlesListSchema } from "../types/articleListSchema";
import { fetchArticlesList } from "../services/fetchArticlesList";

const articlesAdapter = createEntityAdapter<Article>({

    // postId: (comment : Comment) => comment.id, // не нужно, потому что у меня уже id называется как id

});

export const getArticles = articlesAdapter.getSelectors<StateSchema>( // селектор для получения статей из стейта
    (state) => state.articlesList || articlesAdapter.getInitialState(),
);

const articlesListSlice = createSlice({
    name: "articlesListSlice",
    initialState: articlesAdapter.getInitialState<ArticlesListSchema>({
        ids: [],
        entities: {},
        view: ArticleTypeView.TILE,
        isLoading: false,
        error: undefined,
    }),
    reducers: {
        setView: (state, action : PayloadAction<ArticleTypeView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE) as ArticleTypeView;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action : PayloadAction<Article[]>) => { // для action указан тип, который ожидаю на вход
                state.isLoading = false;
                state.error = undefined;
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },

});

export const { reducer: articlesListReducer } = articlesListSlice;
export const { actions: articlesListActions } = articlesListSlice;
