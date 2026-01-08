import {
    FC, ReactNode, useEffect,
} from "react";
import { useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { UseAppDispatch } from "app/providers/StoreProvider/lib/UseAppDispatch";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

export type ReducersListEntries = [StateSchemaKey, Reducer]

interface DynamicSomethingLoaderProps {
reducers: ReducersList;
children: ReactNode;
removeAfterUnmount?: boolean; // на случай, если не хочу удалять редьюсер после размонтирования компонента
}

export const DynamicSomethingLoader: FC<DynamicSomethingLoaderProps> = (props) => {
    const {
        reducers,
        children,
        removeAfterUnmount,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = UseAppDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(
            ([name, reducer]) => {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `INIT ${name} reducer` });
            },
        );

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(
                    ([name]) => {
                        store.reducerManager.remove(name as StateSchemaKey);
                        dispatch({ type: `REMOVE ${name} reducer` });
                    },
                );
            }
        };
        // eslint-disable-next-line
    }, []);
    // eslint-disable-next-line
    return <>{children}</>;
};
