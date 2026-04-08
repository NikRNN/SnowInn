import { vi } from "vitest";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import type { DeepPartial } from "app/types/global";
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList";
import { fetchInitArticlesPage } from "./initArticlesPage";
import { addArticlesListActions } from "../../slices/addArticlesListSlice";

vi.mock("axios"); // заменил модуль axios на mock, далее все методы (get, post, put и т.д.) становятся vi.fn()
vi.mock("../fetchArticlesList/fetchArticlesList");
vi.mock("../../slices/addArticlesListSlice", () => ({
    addArticlesListActions: {
        initState: vi.fn(),
        setOrder: vi.fn(),
        setSearch: vi.fn(),
        setSort: vi.fn(),
        setType: vi.fn(),
    },
}));
beforeEach(() => {
    vi.clearAllMocks();
});
const mockedAxios = vi.mocked(axios, true);

describe("initArticlesPage", () => {
    it("inited true", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(fetchInitArticlesPage as any, {
            articlesList: {
                _inited: true,
            },
        });

        const params = new URLSearchParams();
        params.set("order", "asc");
        params.set("search", "abc");
        params.set("sort", "created");
        params.set("type", "ALL");

        await thunk.callThunk(params);

        expect(fetchArticlesList).not.toHaveBeenCalled();
        expect(addArticlesListActions.initState).not.toHaveBeenCalled();
        expect(addArticlesListActions.setOrder).not.toHaveBeenCalled();
        expect(addArticlesListActions.setSearch).not.toHaveBeenCalled();
        expect(addArticlesListActions.setSort).not.toHaveBeenCalled();
        expect(addArticlesListActions.setType).not.toHaveBeenCalled();
    });

    it("inited false", async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(fetchInitArticlesPage as any, {
            articlesList: {
                _inited: false,
            },
        });

        const params = new URLSearchParams();
        params.set("order", "asc");
        params.set("search", "abc");
        params.set("sort", "created");
        params.set("type", "ALL");

        await thunk.callThunk(params);

        expect(addArticlesListActions.setOrder).toHaveBeenCalledWith("asc");
        expect(addArticlesListActions.setSearch).toHaveBeenCalledWith("abc");
        expect(addArticlesListActions.setSort).toHaveBeenCalledWith("created");
        expect(addArticlesListActions.setType).toHaveBeenCalledWith("ALL");
        expect(addArticlesListActions.initState).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    });
});
