import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Article, ArticleTypeView } from "entities/Article";
import { ARTICLE_VIEW_LOCALSTORAGE } from "shared/const/localstorage";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import { SortTypeOrder } from "shared/types";
import { ArticlesListSchema } from "../types/articleListSchema";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

const articlesAdapter = createEntityAdapter<Article>({

    // postId: (comment : Comment) => comment.id, // не нужно, потому что у меня уже id называется как id

});

export const getArticles = articlesAdapter.getSelectors<StateSchema>( // селектор для получения статей из стейта
    (state) => state.articlesList || articlesAdapter.getInitialState(),
);

const addArticlesListSlice = createSlice({
    name: "articlesListSlice",
    initialState: articlesAdapter.getInitialState<ArticlesListSchema>({
        ids: [],
        entities: {},
        view: ArticleTypeView.LIST,
        isLoading: false,
        error: undefined,
        page: 1,
        hasMore: true,
        _inited: false,
        sort: ArticleSortField.VIEWS,
        order: "asc",
        search: "",
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action : PayloadAction<ArticleTypeView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE, action.payload);
        },
        setPage: (state, action : PayloadAction<number>) => {
            state.page = action.payload;
        },
        setSort: (state, action : PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setOrder: (state, action : PayloadAction<SortTypeOrder>) => {
            state.order = action.payload;
        },
        setSearch: (state, action : PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE) as ArticleTypeView;
            state.view = view;
            state.limit = view === ArticleTypeView.LIST ? 3 : 9;
            // eslint-disable-next-line
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => { // для action указан тип, который ожидаю на вход
                state.isLoading = false;
                state.error = undefined;
                state.hasMore = action.payload.length > 0;

                if (action.meta.arg.replace) { // тут отрабатывает флаг replace
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },

});

export const { reducer: addArticlesListReducer } = addArticlesListSlice;
export const { actions: addArticlesListActions } = addArticlesListSlice;
