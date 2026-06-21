import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { getLoginState } from "./getLoginState";

describe("getLoginState.test", () => {
    test("test with full state", () => {
        const state : DeepPartial<StateSchema> = {
            loginForm: {
                username: "admin",
                password: "123",
                isLoading: false,
                error: undefined,
            },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: "admin",
            password: "123",
            isLoading: false,
            error: undefined,
        });
    });

    test("test without error", () => {
        const state : DeepPartial<StateSchema> = {
            loginForm: {
                username: "admin",
                password: "123",
                isLoading: false,

            },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: "admin",
            password: "123",
            isLoading: false,
        });
    });

    test("test with undefined state", () => {
        const state : DeepPartial<StateSchema> = {
            loginForm: undefined,
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: "",
            password: "",
            isLoading: false,
            error: null,
        });
    });
});
