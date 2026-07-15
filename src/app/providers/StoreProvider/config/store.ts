import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { ReducersList } from "./reducerTypes";
import { $api } from "shared/api/api.js";
import { To, NavigateOptions } from "react-router-dom";
import { scrollSaveReducer } from "features/scrollSave/index.js";
import type { StateSchema } from "./StateSchema.js";
import { createReducerManager } from "./ReducerManager.js";
import { baseRTKApi } from "shared/api/baseRTKApi.js";

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersList, navigate?: (to: To, options?: NavigateOptions) => void) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers, 
        user: userReducer, 
        scrollSave: scrollSaveReducer,
        [baseRTKApi.reducerPath]: baseRTKApi.reducer
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }).concat(baseRTKApi.middleware),
    });

    // eslint-disable-next-line
    // @ts-ignore 
     
    store.reducerManager = reducerManager; //внутри стора создал свое поле, в котором лежит взыов createReducerManager

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
