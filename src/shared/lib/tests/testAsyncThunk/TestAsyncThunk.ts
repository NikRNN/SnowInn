import { StateSchema } from "app/providers/StoreProvider";
import { vi } from "vitest";
import { AsyncThunkAction } from "@reduxjs/toolkit";

type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

export class TestAsyncThunk<Return, Arg, RejectedValue> { // этот класс для удобства тестирования асинхронных thunk
    getState: ()=>StateSchema;

    dispatch: ReturnType<typeof vi.fn>;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator : ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispatch = vi.fn();
        this.getState = vi.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispatch, this.getState, undefined);

        return result;
    }
}
