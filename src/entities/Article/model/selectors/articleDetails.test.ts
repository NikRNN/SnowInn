import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData, getArticleDetailsIsLoading, getArticleDetailsError } from "./articleDetails";

describe("getProfileData.test", () => {
    test("test with piece of state", () => {
        const state : DeepPartial<StateSchema> = {
            articleDetails: {
                data: {
                    id: "1",
                    title: "abc abc",
                },
            },
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual({
            id: "1",
            title: "abc abc",
        });
    });

    test("with empty state", () => {
        const state : DeepPartial<StateSchema> = {
            articleDetails: {},
        };

        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });

    test("with error", () => {
        const state : DeepPartial<StateSchema> = {
            articleDetails: {
                error: "error",
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toEqual("error");
    });

    test("with loading", () => {
        const state : DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
});
