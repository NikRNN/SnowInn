import "@testing-library/jest-dom";
import { DeepPartial } from "app/types/global.js";
import { CounterReducer, CounterActions } from "./CounterSlice.js";
import { CounterSchema } from "../types/CounterSchema.js";

describe("CounterSlice.test", () => {
    test("decrement", () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(CounterReducer(state as CounterSchema, CounterActions.decremented())).toEqual({ value: 9 });
    });
    test("increment", () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10,
        };
        expect(CounterReducer(state as CounterSchema, CounterActions.incremented())).toEqual({ value: 11 });
    });
    test("work with empty action", () => {
        expect(CounterReducer(undefined, CounterActions.incremented())).toEqual({ value: 1 });
    });
});
