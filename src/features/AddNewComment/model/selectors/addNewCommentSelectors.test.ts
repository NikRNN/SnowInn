import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { getAddNewCommentError, getAddNewCommentText } from "./addNewCommentSelectors";

describe("getAddCommentError.test", () => {
    test("test with error", () => {
        const state : DeepPartial<StateSchema> = {
            addNewComment: {
                error: "комментарий отсутствует",
            },
        };

        expect(getAddNewCommentError(state as StateSchema)).toEqual(
            "комментарий отсутствует",
        );
    });
});

describe("getAddCommentText.test", () => {
    test("test with text", () => {
        const state : DeepPartial<StateSchema> = {
            addNewComment: {
                text: "some comment",
                error: undefined,
            },
        };

        expect(getAddNewCommentText(state as StateSchema)).toEqual(
            "some comment",

        );
    });
});
