import { vi } from "vitest";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import type { DeepPartial } from "app/types/global";
import { fetchNextArticlesPage } from "./fetchNextArticlesPage";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";

// import "@testing-library/jest-dom"; // тут не нужен, т.к. тут с DOM не работаем

vi.mock("axios"); // заменил модуль axios на mock, далее все методы (get, post, put и т.д.) становятся vi.fn()
vi.mock("../fetchArticlesList/fetchArticlesList");
beforeEach(() => {
    vi.clearAllMocks();
});
const mockedAxios = vi.mocked(axios, true);

describe("fetchNextArticlesPage", () => {
    it("success", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(fetchNextArticlesPage as any, {
            articlesList: {
                page: 2,
                ids: [],
                entities: {},
                limit: 4,
                isLoading: false,
                hasMore: true,
            },
        });

        await thunk.callThunk(undefined);

        expect(fetchArticlesList).toHaveBeenCalled();
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 }); // меняем page на 1 по сравнению с исходным стейтом
        expect(thunk.dispatch).toHaveBeenCalledTimes(4); // диспатч вызван 4 раза: пендинг, фулфилд и два раза внутри fetchNextArticlesPage
    });

    it("hasMore false", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(fetchNextArticlesPage as any, {
            articlesList: {
                page: 2,
                ids: [],
                entities: {},
                limit: 4,
                isLoading: false,
                hasMore: false,
            },
        });

        await thunk.callThunk(undefined);

        expect(fetchArticlesList).not.toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // будет вызван только пендинг и фулфилд
    });

    it("isLoading true", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(fetchNextArticlesPage as any, {
            articlesList: {
                page: 2,
                ids: [],
                entities: {},
                limit: 4,
                isLoading: true,
                hasMore: true,
            },
        });

        await thunk.callThunk(undefined);

        expect(fetchArticlesList).not.toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // два диспатчка внутри экшена не будут вызваны
    });
});

describe("fetchNextArticlesPage", () => {
    let dispatch: Dispatch;
    let getState: () => DeepPartial<StateSchema>;

    beforeEach(() => {
        dispatch = vi.fn();
        getState = vi.fn();
        vi.clearAllMocks();
    });

    it("success", async () => { // вариант без TestAsyncThunk
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                page: 2,
                ids: [],
                entities: {},
                limit: 4,
                isLoading: false,
                hasMore: true,
            },
        };
        getState = vi.fn(() => state as StateSchema);

        const action = fetchNextArticlesPage();

        const result = await action(dispatch, getState as unknown as ()=>StateSchema, { api: mockedAxios, navigate: vi.fn() });
        expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
        expect(dispatch).toHaveBeenCalledTimes(4);
    });
});
