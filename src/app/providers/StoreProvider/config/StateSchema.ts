import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { CounterSchema } from "entities/Counter";
import {
    EnhancedStore, ReducersMapObject, Action, Reducer,
} from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";

export interface StateSchema {
    user: UserSchema;
    counter: CounterSchema;
    // дальше пойдут асинхронные редьюсеры (поэтому и необязательные)
    loginForm?: LoginSchema;
    profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema | undefined, action:Action) => StateSchema;
    add: (key : StateSchemaKey, reducer:Reducer) => void;
    remove: (key:StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> // enhancedstore - это стандартный тип , который возвращает стор
 {
    reducerManager: ReducerManager
 }
