import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import {
    getArticlesListOrder, getArticlesListSort, getArticlesListSearch, getArticlesListType,
} from "./articlesPageSelectors";

describe("articlesPageSelectors.test", () => {
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
