import type { Decorator } from "@storybook/react";
import { StoreProvider, createReduxStore } from "app/providers/StoreProvider";
import type { StateSchema } from "app/providers/StoreProvider/config/types";
import type { DeepPartial } from "app/types/global";
import { ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { Provider } from "react-redux";

export const StoreDecoratorWithState = (state: DeepPartial<StateSchema>, asyncReducers: ReducersList): Decorator => function (Story) {
    return (
        <StoreProvider initialState={state} asyncReducers={asyncReducers}>
            <Story />
        </StoreProvider>
    );
};

export const StoreDecoratorWithoutState: Decorator = (Story) => {
    const store = createReduxStore(
        undefined,
        undefined,
        () => {}, // заглушка вместо navigate
    );

    return (
        <Provider store={store}>
            <Story />
        </Provider>
    );
};
