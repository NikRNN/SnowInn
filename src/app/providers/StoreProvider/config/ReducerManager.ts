import {
    Action, Reducer, ReducersMapObject, combineReducers,
} from "@reduxjs/toolkit";
import { CustomOptionalRecord } from "app/types/global";
import type { ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema";

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>) : ReducerManager { // функция принимает на вход какие-то исходные редьюсеры (в моем случае - это userReducer, loginREducer...)
    const reducers = { ...initialReducers };
    let combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;

    // let combinedReducer = combineReducers(reducers); // со0здаю корневой редьюсер

    let keysToRemove : StateSchemaKey[] = []; // массив названий редьюсеров, которые мы хотим удалить
    const mountedReducers : CustomOptionalRecord<StateSchemaKey, boolean> = {};

    return {
        getReducerMap: () => reducers,
        mountedReducers: () => mountedReducers,
        reduce: (state:StateSchema | undefined, action:Action) => {
            if (keysToRemove.length > 0 && state) { // если массив для удаления больше 0, то удаляю из стейта по ключу редьюсер
                state = { ...state };
                keysToRemove.forEach((key) => delete state![key]);
                keysToRemove = []; // очищаю массив названий редьюсеров дял удалений
            }

            return combinedReducer(state, action);
        },

        add: (key : StateSchemaKey, reducer:Reducer) => { // добавляет редьюсеры. если ключ не ложь и такого редьюсера нет, то добавляю редьюсер по ключу
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducers[key] = true;
            combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;
        },

        remove: (key:StateSchemaKey) => { // аналогичный подход к удалению редьюсера
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            combinedReducer = combineReducers(reducers) as Reducer<StateSchema>;
            mountedReducers[key] = false;
        },
    };
}
