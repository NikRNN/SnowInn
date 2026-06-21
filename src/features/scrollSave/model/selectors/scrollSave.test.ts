import "@testing-library/jest-dom";
import { StateSchema } from "app/providers/StoreProvider";
import { DeepPartial } from "app/types/global";
import { getScrollSave, getScrollPosByPath } from "./scrollSave";

describe("getScrollSave.test", () => {
    test("test with getScrollSave", () => {
        const state : DeepPartial<StateSchema> = {
            scrollSave: {
                scroll: { abc: 300 },
            },
        };

        expect(getScrollSave(state as StateSchema)).toEqual(
            { abc: 300 },
        );
    });

    test("test with getScrollPosByPath", () => {
        const state : DeepPartial<StateSchema> = {
            scrollSave: {
                scroll: { abc: 300 },
            },
        };

        expect(getScrollPosByPath(state as StateSchema, "abc")).toEqual(
            300,
        );
    });
});
