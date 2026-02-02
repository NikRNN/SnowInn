import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { getProfileData } from "./getProfileData";

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
