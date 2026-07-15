import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18nForTest.js";
import {  StoreProvider } from "app/providers/StoreProvider/index.js";
import type { StateSchema } from "app/providers/StoreProvider/config/types";
import { DeepPartial } from "app/types/global.js";
import { ReducersList } from "../../component/DynamicSomethingLoader";

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: ReducersList;
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
    const { route = "/", initialState, asyncReducers } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,

    );
}
