import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { ScrollSaveSchema } from "../types/scrollSchema";
import { scrollSaveReducer, scrollSaveActions } from "./scrollSaveSlice";

describe("scrollSaveSlice.test", () => {
    test("setScrollPos", () => {
        const state : DeepPartial<ScrollSaveSchema> = {
            scroll: {},
        };
        expect(scrollSaveReducer(state as ScrollSaveSchema, scrollSaveActions.setScrollPos({ path: "abc", position: 300 }))).toEqual({
            scroll: {
                abc: 300,
            },
        });
    });
});
