import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { getUserAuthData } from "./getUserAuthData";

describe("getUserAuthData.test", () => {
    test("test with full info", () => {
        const state : DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: "1",
                    username: "nik",
                },
            },
        };

        expect(getUserAuthData(state as StateSchema)).toEqual({
            id: "1",
            username: "nik",
        });
    });
});
