import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { getUserInited } from "./getUserInited";

describe("getUserInited.test", () => {
    test("test with true", () => {
        const state : DeepPartial<StateSchema> = {
            user: {
                initedUser: true,
            },
        };

        expect(getUserInited(state as StateSchema)).toEqual(true);
    });

    test("test with false", () => {
        const state : DeepPartial<StateSchema> = {
            user: {
                initedUser: false,
            },
        };

        expect(getUserInited(state as StateSchema)).toEqual(false);
    });
});
