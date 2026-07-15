import { Provider } from "react-redux";
import { ReactNode } from "react";
import { createReduxStore } from "app/providers/StoreProvider/config/store.js";
import { DeepPartial } from "app/types/global.js";
import type { ReducersList } from "../config/reducerTypes";
import { ReducersMapObject } from "@reduxjs/toolkit";
import type { StateSchema } from "../config/types";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList
}

export function StoreProvider({ children, initialState, asyncReducers }: StoreProviderProps) {
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>);
    return (
        <Provider store={store}>{children}</Provider>
    );
}
