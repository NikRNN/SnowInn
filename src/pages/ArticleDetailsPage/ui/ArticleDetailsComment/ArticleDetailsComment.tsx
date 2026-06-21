import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import {memo , useCallback } from "react";
import { Text , TextSize } from "shared/ui/Text/Text";
import { AddNewComment } from "features/addNewComment";
import { CommentList } from "entities/Comment";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addCommentForArticle } from "../../../ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle";
import { useSelector } from "react-redux";
import {getArticleComments} from "../../model/slices/articleDetailsPageCommentSlice/articleDetailsPageCommentsSlice"
import { getArticleCommentIsLoading } from "../../model/selectors/comments/getArticleCommentIsLoding/getArticleCommentIsLoading";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentByArticleId";
export interface ArticleDetailsCommentProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComment = memo(({ className, id }: ArticleDetailsCommentProps) => {

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll); // получил список комментариев
    const commentsIsLoading = useSelector(getArticleCommentIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    const onSendComment = useCallback((value : string) => {
        dispatch(addCommentForArticle(value));
    }, [dispatch]);

    return (
        <div className={classNames("", [className])}>
            <Text size={TextSize.L} title={t("Комментарии")} />
            <AddNewComment onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments}
            />
        </div>
    );
})

