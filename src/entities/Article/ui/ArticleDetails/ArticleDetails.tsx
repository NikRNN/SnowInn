import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { ArticleReducer } from "entities/Article/model/slice/ArticleDetailsSlice";
import { useEffect, memo } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { Text, TextPosition, TextTheme } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/articleDetails";
import cls from "./ArticleDetails.module.scss";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";

interface ArticleDetailsProps {
  className?: string;
  id: string
}

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
    const { t } = useTranslation();

    const reducers : ReducersList = {
        articleDetails: ArticleReducer,
    };

    const dispatch = useAppDispatch();

    // const isLoading = useSelector(getArticleDetailsIsLoading);
    const isLoading = true;
    const error = useSelector(getArticleDetailsError);
    const dataArticle = useSelector(getArticleDetailsData);

    useEffect(() => {
        dispatch(fetchArticleById(id));
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={150} />
                <Skeleton className={cls.skeleton} width="100%" height={150} />
            </div>
        );
    } else if (error) {
        content = (
            <div>
                <Text
                    position={TextPosition.CENTER}
                    title={t("Произошла ошибка при загрузке статьи")}
                    text="Возможно, такой статьи у нас нет"
                    theme={TextTheme.ERROR}
                />
            </div>
        );
    } else {
        content = <div>ARTICLE DETAILS...</div>;
    }

    return (

        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, [className])}>
                {content}
            </div>
        </DynamicSomethingLoader>

    );
});
