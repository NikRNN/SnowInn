import { vi } from "vitest";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import type { DeepPartial } from "app/types/global";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import type { Article } from "entities/Article/model/types/article";
import { fetchArticlesList } from "./fetchArticlesList";

// import "@testing-library/jest-dom"; // тут не нужен, т.к. тут с DOM не работаем

vi.mock("axios"); // заменил модуль axios на mock, далее все методы (get, post, put и т.д.) становятся vi.fn()

beforeEach(() => {
    vi.clearAllMocks();
});
const mockedAxios = vi.mocked(axios, true);

describe("fetchArticleList", () => {
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
                order: "asc",
                sort: ArticleSortField.CREATED,
                ids: [],
                entities: {},
                search: "abc",
                limit: 4,
                isLoading: false,
                hasMore: true,
            },
        };
        getState = vi.fn(() => state as StateSchema);

        const articles: Article[] = [
            {
                id: "1",
                user: { id: "u1", username: "nikita" },
                title: "Статья 1",
                subtitle: "Подзаголовок 1",
                img: "img1.jpg",
                views: 100,
                createdAt: "fdgfgd",
                type: [ArticleType.ALL],
                blocks: [],
            },
            {
                id: "2",
                user: { id: "u2", username: "alex" },
                title: "Статья 2",
                subtitle: "Подзаголовок 2",
                img: "img2.jpg",
                views: 50,
                createdAt: "fjdgfjdg",
                type: [ArticleType.ALL],
                blocks: [],
            },
        ];
        mockedAxios.get.mockResolvedValue({ data: articles });
        const action = fetchArticlesList({});

        const result = await action(dispatch, getState as unknown as ()=>StateSchema, { api: mockedAxios });
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(articles);
    });

    it("error", async () => { // вариант без TestAsyncThunk
        const state : DeepPartial<StateSchema> = {
            articlesList: {
                page: 2,
                order: "asc",
                sort: ArticleSortField.CREATED,
                ids: [],
                entities: {},
                search: "abc",
                limit: 4,
                isLoading: false,
                hasMore: true,
            },
        };

        getState = vi.fn(() => state as StateSchema);

        mockedAxios.get.mockResolvedValue({ data: undefined });

        const action = fetchArticlesList({});

        const result = await action(dispatch, getState as unknown as ()=>StateSchema, { api: mockedAxios });
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual("error");
    });
});
