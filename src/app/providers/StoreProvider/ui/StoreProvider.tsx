import { Provider } from "react-redux";
import { ReactNode } from "react";
import { createReduxStore } from "app/providers/StoreProvider/config/store.js";
import { DeepPartial } from "app/types/global.js";
import { StateSchema } from "../config/StateSchema.js";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export function StoreProvider({ children, initialState }: StoreProviderProps) {
    const store = createReduxStore(initialState as StateSchema);
    return (
        <Provider store={store}>{children}</Provider>
    );
}
