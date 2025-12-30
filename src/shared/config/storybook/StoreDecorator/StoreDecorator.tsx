import type { Decorator } from "@storybook/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import type { DeepPartial } from "app/types/global";

export const StoreDecoratorWithState = (state: DeepPartial<StateSchema>): Decorator => function (Story) {
    return (
        <StoreProvider initialState={state}>
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
