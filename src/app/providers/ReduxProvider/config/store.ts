import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "entities/index.js";
import { StateSchema } from "./StateSchema.js";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({ reducer: { counter: CounterReducer }, devTools: __IS_DEV, preloadedState: initialState });
}
