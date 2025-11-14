import { createSlice } from "@reduxjs/toolkit";
import { CounterSchema } from "../types/CounterSchema.js";

const initialState : CounterSchema = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        incremented: (state) => {
            state.value += 1;
        },
        decremented: (state) => {
            state.value -= 1;
        },
    },
});

export const { actions: CounterActions } = counterSlice; // перемеиновал экспорт
export const { reducer: CounterReducer } = counterSlice; // перемеиновал экспорт
