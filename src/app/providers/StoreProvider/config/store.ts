import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { CounterReducer } from "entities/Counter/index.js";
import { ReducersList } from "shared/lib/component/DynamicSomethingLoader.js";
import { $api } from "shared/api/api.js";
import { To, NavigateOptions } from "react-router-dom";
import { StateSchema } from "./StateSchema.js";
import { createReducerManager } from "./ReducerManager.js";

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersList, navigate?: (to: To, options?: NavigateOptions) => void) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers, user: userReducer, counter: CounterReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        }),
    });

    // eslint-disable-next-line
    // @ts-ignore 
    // eslint-disable-next-line
    store.reducerManager = reducerManager; //внутри стора создал свое поле, в котором лежит взыов createReducerManager

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
