import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateError } from "./getProfileValidateError";
import { ValidateProfileError } from "../../types/profile";

describe("getProfileValidateError.test", () => {
    test("test with full validate", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME,
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.SERVER_ERROR,
                ],

            },
        };

        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME,
            ValidateProfileError.NO_DATA,
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test("test with partial validate", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME,

                ],

            },
        };

        expect(getProfileValidateError(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME,

        ]);
    });
});
