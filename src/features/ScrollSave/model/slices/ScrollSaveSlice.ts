import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ScrollSaveSchema } from "../types/scrollSchema";

const initialState: ScrollSaveSchema = {
    scroll: {},
};

const ScrollSaveSlice = createSlice({
    name: "ScrollSave",
    initialState,
    reducers: {
        setScrollPos: (state, action: PayloadAction<{path: string, position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position; // в объект scroll записываем в качестве ключа название какого-то элемента, а в качестве значения позиицю в пикселях
        },
    },
});

export const { actions: ScrollSaveActions } = ScrollSaveSlice; // перемеиновал экспорт
export const { reducer: ScrollSaveReducer } = ScrollSaveSlice;
