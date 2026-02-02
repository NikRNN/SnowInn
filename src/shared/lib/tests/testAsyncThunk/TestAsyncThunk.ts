import { StateSchema } from "app/providers/StoreProvider";
import { vi } from "vitest";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import axios, { AxiosInstance } from "axios";
import type { AxiosStatic } from "axios";
import { DeepPartial } from "app/types/global";

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;
//

export class TestAsyncThunk<Return, Arg, RejectedValue> { // этот класс для удобства тестирования асинхронных thunk
    getState: ()=>StateSchema;

    dispatch: ReturnType<typeof vi.fn>;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    api: AxiosInstance;

    navigate: ReturnType<typeof vi.fn>;

    constructor(actionCreator : ActionCreatorType<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
        this.actionCreator = actionCreator;
        this.dispatch = vi.fn();
        this.getState = vi.fn(() => state as StateSchema);
        this.navigate = vi.fn();
        this.api = vi.mocked(axios) as unknown as AxiosStatic;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

        return result;
    }
}
