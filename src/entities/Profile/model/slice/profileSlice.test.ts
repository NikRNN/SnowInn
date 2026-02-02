import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { Country } from "entities/Country";
import { ProfileSchema, ValidateProfileError } from "../types/profile";
import { ProfileActions, ProfileReducer } from "./profileSlice";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

describe("profileSlice.test", () => {
    test("set readOnly", () => {
        const state : DeepPartial<ProfileSchema> = { readonly: false };
        expect(ProfileReducer(state as ProfileSchema, ProfileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    test("cancel edit", () => {
        const state : DeepPartial<ProfileSchema> = {
            data: {
                firstname: "nik",
                lastname: "rom",
                age: 33,
                country: Country.Austria,
                city: "sar",
                username: "ggg",
            },
            dataForm: { username: "" },
        };

        expect(ProfileReducer(state as ProfileSchema, ProfileActions.cancelEdit())).toEqual({
            readonly: true,
            validateError: undefined,
            data: state.data,
            dataForm: state.data,
        });
    });

    test("updateProfileForm", () => {
        const state : DeepPartial<ProfileSchema> = {
            dataForm: {
                firstname: "nik",
                lastname: "rom",
                age: 33,
                country: Country.Austria,
                city: "sar",
                username: "ggg",
            },

        };

        expect(ProfileReducer(state as ProfileSchema, ProfileActions.updateProfileForm({
            firstname: "abc",
            lastname: "abc",
            age: 33,
            country: Country.Austria,
            city: "sar",
            username: "ggg",
        }))).toEqual({

            dataForm: {
                ...state.dataForm,
                firstname: "abc",
                lastname: "abc",
                age: 33,
                country: Country.Austria,
                city: "sar",
                username: "ggg",

            },
        });
    });

    test("updateProfileForm pending", () => {
        const state : DeepPartial<ProfileSchema> = {
            isLoading: false, validateError: [ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME],

        };
        expect(ProfileReducer(state as ProfileSchema, updateProfileData.pending("requestId", undefined))).toEqual({
            isLoading: true,
            validateError: undefined,
        });
    });

    test("updateProfileForm fulfilled", () => {
        const state : DeepPartial<ProfileSchema> = {
            isLoading: true, validateError: [ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME], readonly: false,

        };
        expect(ProfileReducer(state as ProfileSchema, updateProfileData.fulfilled({ // fulfilled принимает несколько аргументов, см спецификацию
            firstname: "abc",
            lastname: "abc",
            age: 33,
            country: Country.Austria,
            city: "sar",
            username: "ggg",
        }, ""))).toEqual({
            isLoading: false,
            readonly: true,
            data: {
                firstname: "abc",
                lastname: "abc",
                age: 33,
                country: Country.Austria,
                city: "sar",
                username: "ggg",
            },
            dataForm: {
                firstname: "abc",
                lastname: "abc",
                age: 33,
                country: Country.Austria,
                city: "sar",
                username: "ggg",
            },
            validateError: undefined,
        });
    });
});
