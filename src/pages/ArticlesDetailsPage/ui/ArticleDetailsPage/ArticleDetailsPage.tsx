import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArticleCommentIsLoading } from "features/ArticleCommentsList/model/selectors/getArticleCommentIsLoding/getArticleCommentIsLoading.js";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect.js";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch.js";
import { addCommentForArticle } from "features/ArticleCommentsList/model/services/addCommentForArticle/addCommentForArticle.js";
import { classNames } from "../../../../shared/lib/classNames/classNames.js";
import { ArticleDetails } from "../../../../entities/Article";
import { CommentList } from "../../../../entities/Comment";
import { Text } from "../../../../shared/ui/Text/Text";
import { DynamicSomethingLoader, ReducersList } from "../../../../shared/lib/component/DynamicSomethingLoader";
import cls from "./ArticleDetailPage.module.scss";
import { articleDetailsCommentsReducer, getArticleComments } from "../../../../features/ArticleCommentsList/model/slices/articleDetailsCommentsSlice";
import { getArticleCommentError } from "../../../../features/ArticleCommentsList/model/selectors/getArticleCommentError/getArticleCommentError.js";
import { fetchCommentByArticleId } from "../../../../features/ArticleCommentsList/model/services/fetchCommentsByArticleId/fetchCommentByArticleId.js";
import { AddNewComment } from "../../../../features/AddNewComment/index.js";

interface ArticlesDetailsPageProps {
  className?: string;
}

const reducers:ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

export function ArticleDetailsPage({ className }: ArticlesDetailsPageProps) {
    const { t } = useTranslation("article_details");
    const dispatch = useAppDispatch();

    const { id } = useParams(); // получаю id из строки запроса

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentIsLoading);
    const commentsError = useSelector(getArticleCommentError);

    useInitialEffect(() => {
        dispatch(fetchCommentByArticleId(id));
    });

    const onSendComment = useCallback((value : string) => {
        dispatch(addCommentForArticle(value));
    }, [dispatch]);

    const isStorybook = import.meta.env.STORYBOOK === "true";

    if (!id && !isStorybook) {
        return (
            <div className={classNames(cls.ArticlesDetailsPage, [className])}>
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticlesDetailsPage, [className])}>
                <ArticleDetails id={id!} />
                <Text className={cls.commentsTitle} title={t("Комментарии")} />
                <AddNewComment onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </div>
        </DynamicSomethingLoader>

    );
}

export default memo(ArticleDetailsPage);
