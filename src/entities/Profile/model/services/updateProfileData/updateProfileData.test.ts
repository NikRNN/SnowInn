import { vi } from "vitest";
import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { TestAsyncThunk } from "shared/lib/tests/testAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { DeepPartial } from "app/types/global";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../types/profile";

// import "@testing-library/jest-dom"; // тут не нужен, т.к. тут с DOM не работаем

vi.mock("axios"); // заменил модуль axios на mock, далее все методы (get, post, put и т.д.) становятся vi.fn()

describe("updateProfileData.test", () => {
    const mockedAxios = vi.mocked(axios, true); // возвращает тот же axios, но с другим типом, где, например, есть mockResolvedValue
    let dispatch: Dispatch;
    let getState: ()=> DeepPartial<StateSchema>;

    beforeEach(() => {
        dispatch = vi.fn();
        getState = vi.fn(() => ({
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
        }));
    });

    test("success", async () => { // вариант без TestAsyncThunk
        mockedAxios.put.mockReturnValue(Promise.resolve({

            data: {
                firstname: "nik",
                lastname: "rom",
                age: 33,
                country: Country.Austria,
                city: "sar",
                username: "gfgfgf",
            },

        }));

        const action = updateProfileData();

        const result = await action(dispatch, getState, { api: mockedAxios, navigate: vi.fn() });
        expect(mockedAxios.put).toHaveBeenCalled(); // проверяю, что axios.get в принципе вызвался
        expect(dispatch).toHaveBeenCalledTimes(2); // проверяю, что dispatch вызвался два раза: pending и fulfilled
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual({

            firstname: "nik",
            lastname: "rom",
            age: 33,
            country: Country.Austria,
            city: "sar",
            username: "gfgfgf",

        });
    });

    test("error", async () => { // вариант без TestAsyncThunk
        mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const action = updateProfileData();
        const result = await action(dispatch, getState, { api: mockedAxios, navigate: vi.fn() });
        expect(mockedAxios.put).toHaveBeenCalled(); // проверяю, что axios.get в принципе вызвался
        expect(dispatch).toHaveBeenCalledTimes(2); // проверяю, что dispatch вызвался два раза: pending и rejected
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([

            ValidateProfileError.SERVER_ERROR,

        ]);
    });

    // вариант с TestAsyncThunk
    test("success with TestAsyncThunk", async () => {
        mockedAxios.put.mockReturnValue(Promise.resolve({

            data: {
                firstname: "nik",
                lastname: "rom",
                age: 33,
                country: Country.Austria,
                city: "sar",
                username: "gfgfgf",

            },
        }));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(updateProfileData as any, {
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
        });
        const result = await thunk.callThunk(undefined);
        expect(thunk.api.put).toHaveBeenCalled();
        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending + fulfilled
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual({

            firstname: "nik",
            lastname: "rom",
            age: 33,
            country: Country.Austria,
            city: "sar",
            username: "gfgfgf",

        });
    });

    test("error with TestAsyncThunk", async () => { // вариант с TestAsyncThunk
        mockedAxios.put.mockReturnValue(Promise.resolve({ status: 403 }));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(updateProfileData as any, {
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
        });
        const result = await thunk.callThunk(undefined);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending + reject
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([

            ValidateProfileError.SERVER_ERROR,

        ]);
    });

    test("validate error with TestAsyncThunk", async () => { // вариант с TestAsyncThunk
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const thunk = new TestAsyncThunk(updateProfileData as any, {
            profile: {
                dataForm: {
                    firstname: "",
                    lastname: "rom",
                    age: 33,
                    country: Country.Austria,
                    city: "sar",
                    username: "gfgfgf",
                },
            },
        });
        const result = await thunk.callThunk(undefined);
        expect(thunk.dispatch).toHaveBeenCalledTimes(2); // pending + reject
        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([

            ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME,

        ]);
    });
});
