import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileReadOnly } from "./getProfileReadOnly";

describe("getProfileReadOnly.test", () => {
    test("test with true", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                readonly: true,

            },
        };

        expect(getProfileReadOnly(state as StateSchema)).toEqual(
            true,
        );
    });

    test("test with false", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                readonly: false,

            },
        };

        expect(getProfileReadOnly(state as StateSchema)).toEqual(
            false,
        );
    });
});
