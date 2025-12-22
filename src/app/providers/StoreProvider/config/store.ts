import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { CounterReducer } from "entities/index.js";
import { userReducer } from "entities/User";
import { StateSchema } from "./StateSchema.js";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: CounterReducer, user: userReducer,
    };

    return configureStore<StateSchema>({ reducer: rootReducers, preloadedState: initialState });
}
