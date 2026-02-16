import "@testing-library/jest-dom";
import type { DeepPartial } from "app/types/global";
import { AddNewCommentSchema } from "../types/addNewComments";
import { AddNewComentActions, AddNewCommentReducer } from "./addNewCommentSlice";

describe("addNewCommentSlice.test", () => {
    test("set text", () => {
        const state : DeepPartial<AddNewCommentSchema> = { text: "some comment", error: undefined };

        expect(AddNewCommentReducer(state as AddNewCommentSchema, AddNewComentActions.setText("123456"))).toEqual({ text: "123456" });
    });
});
