import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileisLoading } from "./getProfileLoading";

describe("getProfileisLoading.test", () => {
    test("test with true", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,

            },
        };

        expect(getProfileisLoading(state as StateSchema)).toEqual(
            true,
        );
    });

    test("test with false", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,

            },
        };

        expect(getProfileisLoading(state as StateSchema)).toEqual(
            false,
        );
    });
});
