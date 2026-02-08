import { vi } from "vitest";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { fetchArticleById } from "./fetchArticleById";

// import "@testing-library/jest-dom"; // тут не нужен, т.к. тут с DOM не работаем

vi.mock("axios"); // заменил модуль axios на mock, далее все методы (get, post, put и т.д.) становятся vi.fn()

describe("fetchArticleById.test", () => {
    const mockedAxios = vi.mocked(axios, true); // возвращает тот же axios, но с другим типом, где, например, есть mockResolvedValue
    let dispatch: Dispatch;
    let getState: ()=> StateSchema;

    beforeEach(() => {
        dispatch = vi.fn();
        getState = vi.fn();
    });

    test("success", async () => { // вариант без TestAsyncThunk
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: {
                id: "1",
                title: "avbfvf",
                subtitle: "vfvf",
            },
        }));

        const action = fetchArticleById("1");

        const result = await action(dispatch, getState, { api: mockedAxios, navigate: vi.fn() });
        expect(mockedAxios.get).toHaveBeenCalled(); // проверяю, что axios.get в принципе вызвался
        expect(dispatch).toHaveBeenCalledTimes(2); // проверяю, что dispatch вызвался два раза: pending и fulfilled
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual({
            id: "1",
            title: "avbfvf",
            subtitle: "vfvf",

        });
    });

    test("error", async () => { // вариант без TestAsyncThunk
        mockedAxios.get.mockReturnValue(Promise.resolve("error"));
        const action = fetchArticleById("1");
        const result = await action(dispatch, getState, { api: mockedAxios, navigate: vi.fn() });
        expect(mockedAxios.get).toHaveBeenCalled(); // проверяю, что axios.get в принципе вызвался
        expect(dispatch).toHaveBeenCalledTimes(2); // проверяю, что dispatch вызвался два раза: pending и rejected
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual("error");
    });

    // вариант с TestAsyncThunk
    test("success with TestAsyncThunk", async () => {
        mockedAxios.get.mockReturnValue(Promise.resolve({
            data: {
                id: "1",
                title: "avbfvf",
                subtitle: "vfvf",
            },
        }));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(fetchArticleById as any);
        const result = await thunk.callThunk(undefined);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending + fulfilled
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual({
            id: "1",
            title: "avbfvf",
            subtitle: "vfvf",
        });
    });

    test("error with TestAsyncThunk", async () => { // вариант с TestAsyncThunk
        mockedAxios.get.mockReturnValue(Promise.resolve("error"));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(fetchArticleById as any);
        const result = await thunk.callThunk(undefined);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending + reject
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual("error");
    });
});
