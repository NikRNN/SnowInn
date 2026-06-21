import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddNewCommentSchema } from "../types/addNewComments";

const initialState: AddNewCommentSchema = {
    text: "",
    error: "",

};

const addNewCommentSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },

});

export const { actions: AddNewComentActions } = addNewCommentSlice; // перемеиновал экспорт
export const { reducer: AddNewCommentReducer } = addNewCommentSlice;
