import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { getProfileData , getProfileError , getProfileForm , getProfileisLoading , getProfileReadOnly , getProfileValidateError } from "./editProfileCardSelectors";
import { ValidateProfileError } from "../types/editProfileCardSchema";

describe("getProfileData.test", () => {
    test("test with full state", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                data: {
                    firstname: "nik",
                    lastname: "rom",
                    age: 33,
                    country: Country.Austria,
                    city: "sar",
                    username: "gfgfgf",
                },

            },
        };

        expect(getProfileData(state as StateSchema)).toEqual({
            firstname: "nik",
            lastname: "rom",
            age: 33,
            country: Country.Austria,
            city: "sar",
            username: "gfgfgf",
        });
    });

    test("test without error", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                data: {
                    firstname: "nik",
                    lastname: "rom",
                    age: 33,
                },
            },
        };

        expect(getProfileData(state as StateSchema)).toEqual({
            firstname: "nik",
            lastname: "rom",
            age: 33,
        });
    });

    test("test with undefined", () => {
        const state : DeepPartial<StateSchema> = {};

        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});


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




describe("getProfileForm.test", () => {
    test("test with error", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                dataForm: {
                    firstname: "nik",
                    lastname: "rom",
                    age: 33,
                    country: Country.Austria,
                    city: "sar",
                    username: "gfgfgf",
                },

            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual({
            firstname: "nik",
            lastname: "rom",
            age: 33,
            country: Country.Austria,
            city: "sar",
            username: "gfgfgf",
        });
    });

    test("test with undefined", () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                dataForm: undefined,
            },
        };

        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});


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
