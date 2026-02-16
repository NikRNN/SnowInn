import { vi } from "vitest";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { addCommentForArticle } from "./addCommentForArticle";

// import "@testing-library/jest-dom"; // тут не нужен, т.к. тут с DOM не работаем

vi.mock("axios"); // заменил модуль axios на mock, далее все методы (get, post, put и т.д.) становятся vi.fn()

describe("addCommentForArticleId.test", () => {
    const mockedAxios = vi.mocked(axios, true); // возвращает тот же axios, но с другим типом, где, например, есть mockResolvedValue
    let dispatch: Dispatch;
    let getState: ()=> StateSchema;

    beforeEach(() => {
        dispatch = vi.fn();
        getState = vi.fn();
    });

    test("success", async () => { // тут вариант с TestAsyncThunk
        mockedAxios.post.mockReturnValue(Promise.resolve({
            data: {
                id: "1",
                text: "some comment",
                user: {
                    id: "1", username: "user",
                },
            },
        }));

        const thunk = new TestAsyncThunk(addCommentForArticle, {
            user: {
                authData: {
                    id: "1",
                    username: "user",
                },
            },
            articleDetails: {
                data: {
                    id: "1",
                },
            },
        });

        const result = await thunk.callThunk("some comment");

        expect(mockedAxios.post).toHaveBeenCalledWith("/comments", {
            articleId: "1",
            userId: "1",
            text: "some comment",
        });

        // Проверяем, что был dispatch второго thunk
        expect(thunk.dispatch).toHaveBeenCalled();

        // Проверяем результат
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual({
            id: "1",
            text: "some comment",
            user: {
                id: "1", username: "user",
            },
        });
    });

    test("error", async () => { // тут вариант классический, без TestAsyncThunk
        mockedAxios.post.mockReturnValue(Promise.reject(new Error()));
        getState = vi.fn(() => ({
            user: {
                authData: { id: "1" },
            },
            articleDetails: {
                data: { id: "10" },
            },
        } as StateSchema));
        const action = addCommentForArticle("1");
        const result = await action(dispatch, getState, { api: mockedAxios, navigate: vi.fn() });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual("error");
    });
});
