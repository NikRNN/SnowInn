import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { getProfileForm } from "./getProfileForm";

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
