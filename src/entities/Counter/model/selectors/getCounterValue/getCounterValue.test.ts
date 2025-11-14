import "@testing-library/jest-dom";
import { DeepPartial } from "app/types/global.js";
import type { StateSchema } from "app/providers/ReduxProvider/index.js";
import { getCounterValue } from "./getCounterValue.js";

describe("getCounterValue.test", () => {
    test("", () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
