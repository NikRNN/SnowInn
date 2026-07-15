import { EntityState } from "@reduxjs/toolkit";
import type { Comment } from "entities/Comment/model/types/index";

export interface ArticleDetailsCommentSchema extends EntityState<Comment, string> {
    isLoading?: boolean,
    error?: string,
}
