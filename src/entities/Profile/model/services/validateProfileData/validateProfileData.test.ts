import { vi } from "vitest";
import { Country } from "entities/Country";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileError } from "../../types/profile";

vi.mock("axios"); // заменил модуль axios на mock, далее все методы (get, post, put и т.д.) становятся vi.fn()

describe("validateProfileData.test", () => {
    test("success with TestAsyncThunk", async () => {
        const result = validateProfileData({
            firstname: "nik",
            lastname: "rom",
            age: 33,
            country: Country.Austria,
            city: "sar",
            username: "gfgfgf",
        });

        expect(result).toEqual([]);
    });

    test("without firstname and lastname", async () => {
        const result = validateProfileData({
            age: 33,
            country: Country.Austria,
            city: "sar",
            username: "gfgfgf",
        });

        expect(result).toEqual([

            ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME,

        ]);
    });

    test("wrong age", async () => {
        const result = validateProfileData({
            firstname: "nik",
            lastname: "rom",
            age: 1.5,
            country: Country.Austria,
            city: "sar",
            username: "gfgfgf",
        });

        expect(result).toEqual([

            ValidateProfileError.INCORRECT_AGE,

        ]);
    });
});
