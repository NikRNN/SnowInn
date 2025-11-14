import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/ReduxProvider/index.js";
import type { DeepPartial } from "app/types/global.js";
import { getCounter } from "./getCounter.js";

describe("getCounter", () => {
    test("return counter value", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
