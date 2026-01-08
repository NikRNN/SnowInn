import type { Decorator } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import type { DeepPartial } from "app/types/global";
import { ReducersList } from "shared/lib/component/DynamicSomethingLoader";

export const StoreDecoratorWithState = (state: DeepPartial<StateSchema>, asyncReducers: ReducersList): Decorator => function (Story) {
    return (
        <StoreProvider initialState={state} asyncReducers={asyncReducers}>
            <Story />
        </StoreProvider>
    );
};

export const StoreDecoratorWithoutState: Decorator = function (Story) {
    return (
        <StoreProvider>
            <div>
                <Story />
            </div>
        </StoreProvider>
    );
};
