import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { ArticleTypeView } from "entities/Article";
import {
    getArticleListError, getArticleListIsLoading, getArticleListView, getArticleListLimit, getArticleListPageNum, getArticleListHasMore, getArticleListIsInited,
} from "./articlesListSelector";

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
});
