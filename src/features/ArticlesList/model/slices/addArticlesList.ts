import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleTypeView } from "entities/Article";
import { ARTICLE_VIEW_LOCALSTORAGE } from "shared/const/localstorage";
import { ArticleBlockType } from "entities/Article/model/types/article";
import { ArticlesListSchema } from "../types/articleListSchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

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
        view: ArticleTypeView.LIST,
        isLoading: false,
        error: undefined,
        page: 1,
        hasMore: true,
    }),
    reducers: {
        setView: (state, action : PayloadAction<ArticleTypeView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE, action.payload);
        },
        setPage: (state, action : PayloadAction<number>) => {
            state.page = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE) as ArticleTypeView;
            state.view = view;
            state.limit = view === ArticleTypeView.LIST ? 3 : 9;
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
                articlesAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },

});

export const { reducer: articlesListReducer } = articlesListSlice;
export const { actions: articlesListActions } = articlesListSlice;
