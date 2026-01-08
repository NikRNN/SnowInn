import { Provider } from "react-redux";
import { ReactNode } from "react";
import { createReduxStore } from "app/providers/StoreProvider/config/store.js";
import { DeepPartial } from "app/types/global.js";
import { ReducersList } from "shared/lib/component/DynamicSomethingLoader.js";
import { StateSchema } from "../config/StateSchema.js";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: ReducersList
}

export function StoreProvider({ children, initialState, asyncReducers }: StoreProviderProps) {
    const store = createReduxStore(initialState as StateSchema, asyncReducers);
    return (
        <Provider store={store}>{children}</Provider>
    );
}
