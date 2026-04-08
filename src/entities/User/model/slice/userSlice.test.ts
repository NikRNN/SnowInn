import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { userActions, userReducer } from "./userSlice";
import { UserSchema } from "../types/user";

describe("userSlice.test", () => {
    test("set authData", () => {
        const state : DeepPartial<UserSchema> = { authData: {}, initedUser: false };
        expect(userReducer(state as UserSchema, userActions.setAuthData({ id: "1", username: "nik" }))).toEqual({ authData: { id: "1", username: "nik" }, initedUser: false });
    });

    test("initAuthData", () => {
        const state : DeepPartial<UserSchema> = {
            initedUser: false,
        };

        expect(userReducer(state as UserSchema, userActions.initAuthData())).toEqual({
            initedUser: true,
        });
    });

    test("logout", () => {
        const state : DeepPartial<UserSchema> = {};

        expect(userReducer(state as UserSchema, userActions.logout())).toEqual({
            authData: undefined,
        });
    });
});
