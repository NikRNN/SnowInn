import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { CounterReducer } from "entities/Counter/index.js";
import { ReducersList } from "shared/lib/component/DynamicSomethingLoader.js";
import { StateSchema } from "./StateSchema.js";
import { createReducerManager } from "./ReducerManager.js";

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersList) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers, user: userReducer, counter: CounterReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({ reducer: reducerManager.reduce, preloadedState: initialState });

    // eslint-disable-next-line
    // @ts-ignore 
    // eslint-disable-next-line
    store.reducerManager = reducerManager; //внутри стора создал свое поле, в котором лежит взыов createReducerManager

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
