import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { LoginSchema } from "../types/LoginSchema";
import { LoginActions, LoginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice.test", () => {
    test("set username", () => {
        const state : DeepPartial<LoginSchema> = { username: "123456" };

        expect(LoginReducer(state as LoginSchema, LoginActions.setUsername("123456"))).toEqual({ username: "123456" });
    });

    test("set password", () => {
        const state : DeepPartial<LoginSchema> = { password: "123456" };
        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword("123456"))).toEqual({ password: "123456" });
    });

    test("set isLoading", () => {
        const action = { type: loginByUsername.pending.type };
        const initialState : DeepPartial<LoginSchema> = { isLoading: true };

        const state = LoginReducer(initialState as LoginSchema, action);

        expect(state).toEqual({ isLoading: true });
    });

    test("set error", () => {
        const action = { type: loginByUsername.rejected.type, payload: "error" };
        const initialState : DeepPartial<LoginSchema> = { error: undefined };
        const state = LoginReducer(initialState as LoginSchema, action);
        expect(state).toEqual({ error: "error", isLoading: false });
    });
});
