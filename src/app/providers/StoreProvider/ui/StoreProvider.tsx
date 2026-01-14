import { Provider } from "react-redux";
import { ReactNode } from "react";
import { createReduxStore } from "app/providers/StoreProvider/config/store.js";
import { DeepPartial } from "app/types/global.js";
import { ReducersList } from "shared/lib/component/DynamicSomethingLoader.js";
import { useNavigate } from "react-router-dom";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "../config/StateSchema.js";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList
}

export function StoreProvider({ children, initialState, asyncReducers }: StoreProviderProps) {
    const navigate = useNavigate();
    const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject<StateSchema>, navigate);
    return (
        <Provider store={store}>{children}</Provider>
    );
}
