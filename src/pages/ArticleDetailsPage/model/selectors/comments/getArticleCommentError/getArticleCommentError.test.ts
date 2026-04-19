import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { getArticleCommentError } from "./getArticleCommentError";

describe("getArticleCommentError.test", () => {
    test("test with error", () => {
        const state : DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: "error",
                },
            },
        };

        expect(getArticleCommentError(state as StateSchema)).toEqual(
            "error",
        );
    });
});
