import type { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";

export const ReduxDecorator: Decorator = function (Story) {
    return (
        <StoreProvider>
            <div>
                <Story />
            </div>
        </StoreProvider>
    );
};
