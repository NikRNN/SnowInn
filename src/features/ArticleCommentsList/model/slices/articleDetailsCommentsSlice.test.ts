import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import type { ArticleDetailsCommentSchema } from "../types/ArticleDetailsCommentSchema";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";
import { fetchCommentByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentByArticleId";

describe("articleDetailsCommentSlice.test", () => {
    test("updateProfileForm pending", () => {
        const state : DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: false, error: undefined, ids: [], entities: {},

        };
        expect(articleDetailsCommentsReducer(state as ArticleDetailsCommentSchema, fetchCommentByArticleId.pending("test-id", ""))).toEqual({
            isLoading: true,
            error: undefined,
            ids: [],
            entities: {},
        });
    });

    test("fetchCommentByArticleId fulfilled", () => {
        const state : DeepPartial<ArticleDetailsCommentSchema> = {
            isLoading: true, error: undefined, ids: [], entities: {},

        };
        expect(articleDetailsCommentsReducer(state as ArticleDetailsCommentSchema, fetchCommentByArticleId.fulfilled( // fulfilled принимает несколько аргументов, см спецификацию
            [{ id: "1", text: "abc", user: { id: "1", username: "nik" } }, { id: "2", text: "bca", user: { id: "2", username: "nikita" } }],
            "",
            "",
        ))).toEqual({
            isLoading: false,
            error: undefined,
            ids: ["1", "2"],
            entities: { 1: { id: "1", text: "abc", user: { id: "1", username: "nik" } }, 2: { id: "2", text: "bca", user: { id: "2", username: "nikita" } } },

        });
    });
});
