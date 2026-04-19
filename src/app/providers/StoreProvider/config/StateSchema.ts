import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthByUsername";
import { CounterSchema } from "entities/Counter";
import {
    EnhancedStore, ReducersMapObject, Action, Reducer,
} from "@reduxjs/toolkit";
import { ProfileSchema } from "entities/Profile";
import type { AxiosInstance } from "axios";
import { ArticleDetailsSchema } from "entities/Article";
import { AddNewCommentSchema } from "features/AddNewComment";
import { CustomOptionalRecord } from "app/types/global";
import { ScrollSaveSchema } from "features/ScrollSave/index";
import { ArticleDetailsPageSchema, ArticleDetailsRecommendedSchema, ArticleDetailsCommentSchema } from "pages/ArticlesDetailsPage";
import { ArticlesListSchema } from "../../../../pages/ArticlesPage/model/types/articleListSchema";

export interface StateSchema {
    user: UserSchema;
    counter: CounterSchema;
    scrollSave: ScrollSaveSchema;
    // дальше пойдут асинхронные редьюсеры (поэтому и необязательные)
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addNewComment?: AddNewCommentSchema;
    articlesList?: ArticlesListSchema;
    // articleDetailsRecommendations?: ArticleDetailsRecommendedSchema;
    // articleDetailsComments?: ArticleDetailsCommentSchema - заменил их на нижестоящую схему
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
