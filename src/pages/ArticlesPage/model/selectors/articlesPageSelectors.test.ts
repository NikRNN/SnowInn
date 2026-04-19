import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { ArticleTypeView } from "entities/Article";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import {
    getArticleListError, getArticleListIsLoading, getArticleListView, getArticleListLimit, getArticleListPageNum, getArticleListHasMore, getArticleListIsInited, getArticlesListOrder, getArticlesListSort, getArticlesListSearch, getArticlesListType,
} from "./articlesPageSelectors";

describe("test articleListSelector.test", () => {
    test("test getArticleListError", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                error: "error",
            },
        };
        expect(getArticleListError(state as StateSchema)).toEqual(
            "error",
        );
    });

    test("test getArticleListIsLoading", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                isLoading: true,
            },
        };
        expect(getArticleListIsLoading(state as StateSchema)).toEqual(
            true,
        );
    });

    test("test getArticleListView", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                view: ArticleTypeView.LIST,
            },
        };
        expect(getArticleListView(state as StateSchema)).toEqual(
            ArticleTypeView.LIST,
        );
    });

    test("test getArticleListLimit", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                limit: 9,
            },
        };
        expect(getArticleListLimit(state as StateSchema)).toEqual(
            9,
        );
    });

    test("test getArticleListPageNum", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                page: 1,
            },
        };
        expect(getArticleListPageNum(state as StateSchema)).toEqual(
            1,
        );
    });

    test("test getArticleListHasMore", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                hasMore: false,
            },
        };
        expect(getArticleListHasMore(state as StateSchema)).toEqual(
            false,
        );
    });

    test("test getArticleListIsInited", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                _inited: true,
            },
        };
        expect(getArticleListIsInited(state as StateSchema)).toEqual(
            true,
        );
    });

    test("getArticlesListOrder", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                order: undefined,
            },
        };

        expect(getArticlesListOrder(state as StateSchema)).toEqual(
            "asc",
        );
    });

    test("getArticlesListSort", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                sort: undefined,
            },
        };

        expect(getArticlesListSort(state as StateSchema)).toEqual(
            ArticleSortField.VIEWS,
        );
    });

    test("getArticlesListSearch", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                search: "nikita",
            },
        };

        expect(getArticlesListSearch(state as StateSchema)).toEqual(
            "nikita",
        );
    });

    test("getArticlesListType", () => {
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                type: ArticleType.FREERIDE,
            },
        };

        expect(getArticlesListType(state as StateSchema)).toEqual(
            ArticleType.FREERIDE,
        );
    });
});
