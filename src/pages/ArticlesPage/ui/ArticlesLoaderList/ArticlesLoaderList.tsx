import { classNames } from "shared/lib/classNames/classNames.js";
import {memo , useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import {getArticleListError, getArticleListIsLoading, getArticleListView } from "../../model/selectors/articlesPageSelectors";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { getArticles } from "../../model/slices/addArticlesListSlice";
import { ArticleList } from "entities/Article/ui/ArticleList/ArticleList";
import { useSelector } from "react-redux";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
export interface ArticlesLoaderListProps {
  className?: string;
}

export const ArticlesLoaderList = memo(({ className}: ArticlesLoaderListProps) => {
    
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useAppDispatch();
    const articlesSelectors = useSelector(getArticles.selectAll); // получаем массив статей
    const isLoading = useSelector(getArticleListIsLoading);
    const error = useSelector(getArticleListError);
    const view = useSelector(getArticleListView);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <div className={classNames("", [className])}>
            <ArticleList
                error={error}
                isLoading={isLoading}
                view={view}
                articles={articlesSelectors}
                className={className}
                onScrollEnd={onLoadNextPart}
                virtualized
            />
        </div>
    );
})