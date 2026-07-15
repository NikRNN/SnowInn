import type { UserSchema } from "entities/User/model/types/index"
import { LoginSchema } from "features/authByUsername/model/types/LoginSchema";
import {
    EnhancedStore, ReducersMapObject, Action, Reducer,
} from "@reduxjs/toolkit";
import { ProfileSchema } from "features/editProfileCard/model/types/editProfileCardSchema";
import type { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article/model/types/ArticleDetailsSchema";
import { AddNewCommentSchema } from "features/addNewComment/model/types/addNewComments";
import { CustomOptionalRecord } from "app/types/global";
import { ScrollSaveSchema } from "features/scrollSave/model/types/scrollSchema";
import type { ArticleDetailsPageSchema } from "pages/ArticleDetailsPage/model/types/index";
import { ArticlesListSchema } from "pages/ArticlesPage/model/types/articleListSchema";
import { baseRTKApi } from "shared/api/baseRTKApi";

export interface StateSchema {
    user: UserSchema;
    scrollSave: ScrollSaveSchema;
    [baseRTKApi.reducerPath]: ReturnType<typeof baseRTKApi.reducer>
    // дальше пойдут асинхронные редьюсеры (поэтому и необязательные)
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addNewComment?: AddNewCommentSchema;
    articlesList?: ArticlesListSchema;
    articleDetailsPage?: ArticleDetailsPageSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state:StateSchema | undefined, action:Action) => StateSchema;
    add: (key : StateSchemaKey, reducer:Reducer) => void;
    remove: (key:StateSchemaKey) => void;
    mountedReducers: ()=> CustomOptionalRecord<StateSchemaKey, boolean> // проверяю, монтирован ли уже редьюсер или нет; для корректной работы DynamicSomethingLoader
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> // enhancedstore - это стандартный тип , который возвращает стор
 {
    reducerManager: ReducerManager
 }

export interface ThunkApi {
    api: AxiosInstance,

}


