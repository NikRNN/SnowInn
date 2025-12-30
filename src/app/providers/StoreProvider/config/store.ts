import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { LoginReducer } from "features/AuthByUsername/index.js";
import { CounterReducer } from "entities/Counter/index.js";
import { StateSchema } from "./StateSchema.js";

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer, loginForm: LoginReducer, counter: CounterReducer,
    };

    return configureStore<StateSchema>({ reducer: rootReducers, preloadedState: initialState });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
