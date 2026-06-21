import { vi } from "vitest";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { userActions } from "entities/User";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { loginByUsername } from "./loginByUsername";

// import "@testing-library/jest-dom"; // тут не нужен, т.к. тут с DOM не работаем

vi.mock("axios"); // заменил модуль axios на mock, далее все методы (get, post, put и т.д.) становятся vi.fn()

describe("loginByUsername.test", () => {
    const mockedAxios = vi.mocked(axios, true); // возвращает тот же axios, но с другим типом, где, например, есть mockResolvedValue
    let dispatch: Dispatch;
    let getState: ()=> StateSchema;

    beforeEach(() => {
        dispatch = vi.fn();
        getState = vi.fn();
    });

    test("success", async () => { // тут вариант с TestAsyncThunk
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: "123", id: "1" } }));

        const thunk = new TestAsyncThunk(loginByUsername);

        const result = await thunk.callThunk({ username: "123", password: "123" });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData({ username: "123", id: "1" }));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual({ username: "123", id: "1" });
    });

    test("error", async () => { // тут вариант классический, без TestAsyncThunk
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = loginByUsername({ username: "123", password: "123" });
        const result = await action(dispatch, getState, { api: mockedAxios, navigate: vi.fn() });

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual("Неверный логин или пароль");
    });
});
