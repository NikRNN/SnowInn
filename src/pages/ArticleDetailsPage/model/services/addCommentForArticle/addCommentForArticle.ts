import { createAsyncThunk } from "@reduxjs/toolkit";
import type { StateSchema, ThunkApi } from "app/providers/StoreProvider";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";

import type { Comment } from "../../../../../entities/Comment/model/types/comments";
import { fetchCommentByArticleId } from "../fetchCommentsByArticleId/fetchCommentByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, {rejectValue: string, extra : ThunkApi, state : StateSchema}>( // типы: массив Comment - то, что вернется в случае успеха, стринг - входные данные thunk и тип ошибки
    "articleDetailsComments/addCommentForArticle", // первый аргумент, название thunk
    async (text, thunkAPI) => {
        const userData = getUserAuthData(thunkAPI.getState()); // проверяем, авторизован ли пользователь

        const article = getArticleDetailsData(thunkAPI.getState()); // проверяю айди статьи, к которой пишу коммент

        if (!userData || !text || !article) {
            return thunkAPI.rejectWithValue("error");
        }
        try {
            const response = await thunkAPI.extra.api.post<Comment>("/comments", {
                articleId: article?.id,
                userId: userData.id,
                text,
            });

            thunkAPI.dispatch(fetchCommentByArticleId(article.id));

            return response.data; // автоматически создает экшн с type articles/fetchCommentsArticleId/fulfilled и payload response.data
        } catch (error) {
            return thunkAPI.rejectWithValue("error");
        }
    },

);
