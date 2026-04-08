import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { ArticleTypeView } from "entities/Article";
import { ArticleSortField, ArticleType, Article } from "entities/Article/model/types/article";
import type { ArticlesListSchema } from "../types/articleListSchema";
import { addArticlesListReducer, addArticlesListActions } from "./addArticlesListSlice";
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList";

describe("addArticleListSlice.test", () => {
    test("setView", () => {
        const state : DeepPartial<ArticlesListSchema> = {
            view: ArticleTypeView.LIST,

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, addArticlesListActions.setView(ArticleTypeView.TILE))).toEqual({
            view: ArticleTypeView.TILE,
        });
    });

    test("setPage", () => {
        const state : DeepPartial<ArticlesListSchema> = {
            page: 1,

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, addArticlesListActions.setPage(2))).toEqual({
            page: 2,
        });
    });

    test("setSort", () => {
        const state : DeepPartial<ArticlesListSchema> = {
            sort: ArticleSortField.CREATED,

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, addArticlesListActions.setSort(ArticleSortField.TITLE))).toEqual({
            sort: ArticleSortField.TITLE,
        });
    });

    test("setOrder", () => {
        const state : DeepPartial<ArticlesListSchema> = {
            order: "asc",

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, addArticlesListActions.setOrder("desc"))).toEqual({
            order: "desc",
        });
    });

    test("setSearch", () => {
        const state : DeepPartial<ArticlesListSchema> = {
            search: "",

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, addArticlesListActions.setSearch("nikita"))).toEqual({
            search: "nikita",
        });
    });

    test("setType", () => {
        const state : DeepPartial<ArticlesListSchema> = {
            type: ArticleType.ALL,

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, addArticlesListActions.setType(ArticleType.FREERIDE))).toEqual({
            type: ArticleType.FREERIDE,
        });
    });

    test("initState", () => {
        localStorage.setItem("articles_view", ArticleTypeView.LIST);

        const state : DeepPartial<ArticlesListSchema> = {
            view: ArticleTypeView.TILE,
            limit: 1,
            _inited: false,

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, addArticlesListActions.initState())).toEqual({
            view: ArticleTypeView.LIST,
            limit: 3,
            _inited: true,

        });
    });

    test("fetchArticleList pending", () => {
        const state : DeepPartial<ArticlesListSchema> = {
            isLoading: false,
            error: undefined,

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, fetchArticlesList.pending("test", { page: 2 }))).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test("fetchArticleList fulfilled", () => {
        const articles: Article[] = [
            {
                id: "1",
                user: { id: "u1", username: "nikita" },
                title: "Статья 1",
                subtitle: "Подзаголовок 1",
                img: "img1.jpg",
                views: 100,
                createdAt: "fdgfgd",
                type: [ArticleType.ALL],
                blocks: [],
            },
            {
                id: "2",
                user: { id: "u2", username: "alex" },
                title: "Статья 2",
                subtitle: "Подзаголовок 2",
                img: "img2.jpg",
                views: 50,
                createdAt: "fjdgfjdg",
                type: [ArticleType.ALL],
                blocks: [],
            },
        ];
        const state : DeepPartial<ArticlesListSchema> = {
            isLoading: true, error: undefined, ids: [], entities: {},

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, fetchArticlesList.fulfilled(articles, "", { page: 3 }))).toEqual({
            isLoading: false,
            error: undefined,
            hasMore: true,
            ids: ["1", "2"],
            entities: {
                1: {
                    id: "1",
                    user: { id: "u1", username: "nikita" },
                    title: "Статья 1",
                    subtitle: "Подзаголовок 1",
                    img: "img1.jpg",
                    views: 100,
                    createdAt: "fdgfgd",
                    type: [ArticleType.ALL],
                    blocks: [],
                },
                2: {
                    id: "2",
                    user: { id: "u2", username: "alex" },
                    title: "Статья 2",
                    subtitle: "Подзаголовок 2",
                    img: "img2.jpg",
                    views: 50,
                    createdAt: "fjdgfjdg",
                    type: [ArticleType.ALL],
                    blocks: [],
                },
            },

        });
    });

    test("fetchArticleList has more false", () => {
        const state : DeepPartial<ArticlesListSchema> = {
            isLoading: true, error: undefined, ids: [], entities: {}, hasMore: true,

        };
        expect(addArticlesListReducer(state as ArticlesListSchema, fetchArticlesList.fulfilled([], "", { page: 3 }))).toEqual({
            isLoading: false,
            error: undefined,
            hasMore: false,
            ids: [],
            entities: {

            },

        });
    });
});
