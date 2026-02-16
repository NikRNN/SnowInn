import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { getArticleCommentIsLoading } from "./getArticleCommentIsLoading";

describe("getArticleCommentIsLoading.test", () => {
    test("test with loading", () => {
        const state : DeepPartial<StateSchema> = {
            articleDetailsComments: {
                isLoading: true,
            },
        };

        expect(getArticleCommentIsLoading(state as StateSchema)).toEqual(
            true,
        );
    });
});
