import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import {
    vi, describe, it, expect, beforeEach,
} from "vitest";
import { DynamicSomethingLoader, ReducersList } from "./DynamicSomethingLoader";

// Создаю объект стора, который удовлетворит TS и Redux
const mockStore = {
    getState: vi.fn(),
    subscribe: vi.fn(),
    dispatch: vi.fn(),
    reducerManager: {
        add: vi.fn(),
        remove: vi.fn(),
        mountedReducers: vi.fn(() => ({})),
    },
    replaceReducer: vi.fn(),
};

describe("DynamicSomethingLoader", () => {
    const reducers: ReducersList = {
        // eslint-disable-next-line
    // @ts-ignore 
    // eslint-disable-next-line
        loginForm: (state: any) => state,
    };

    beforeEach(() => {
        vi.clearAllMocks();
        mockStore.reducerManager.mountedReducers.mockReturnValue({});
    });

    it("should mount with reducers", () => {
        render(
            // Оборачиваю в реальный Provider, но с mockStore
            // eslint-disable-next-line
    // @ts-ignore 
            // eslint-disable-next-line
            <Provider store={mockStore as any}>
                <DynamicSomethingLoader reducers={reducers} removeAfterUnmount={false}>
                    <div>test...</div>
                </DynamicSomethingLoader>
            </Provider>,
        );

        expect(mockStore.reducerManager.add).toHaveBeenCalledWith("loginForm", expect.any(Function));
    });
});
