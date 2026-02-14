import {
    createEntityAdapter,
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { ArticleDetailsCommentSchema } from "../types/ArticleDetailsCommentSchema";
import { fetchCommentByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentByArticleId";

const commentsAdapter = createEntityAdapter<Comment>({

    // postId: (comment : Comment) => comment.id, // не нужно, потому что у меня уже id называется как id

});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
    name: "articleDetailsComments",
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
        ids: [],
        entities: {},
        isLoading: false,
        error: undefined,

    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentByArticleId.fulfilled, (state, action : PayloadAction<Comment[]>) => { // для action указан тип, который ожидаю на вход
                state.isLoading = false;
                state.error = undefined;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentByArticleId.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
