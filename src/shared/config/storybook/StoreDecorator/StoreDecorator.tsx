import type { Decorator } from "@storybook/react";
import { StateSchema, StoreProvider, createReduxStore } from "app/providers/StoreProvider";
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

// export const StoreDecoratorWithoutState: Decorator = function (Story) {
//     return (

//         <StoreProvider>
//             <div>
//                 <Story />
//             </div>
//         </StoreProvider>

//     );
// };

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
