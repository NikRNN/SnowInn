import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError.test", () => {
    test("test with error", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                error: "error",
            },
        };

        expect(getProfileError(state as StateSchema)).toEqual("error");
    });

    test("test with undefined", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                error: undefined,
            },
        };

        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
