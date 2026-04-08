import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { ArticleTypeTabs, ArticleTypeView } from "entities/Article";
import { useSelector } from "react-redux";
import { getArticleListView } from "features/ArticlesList/model/selectors/articlesListSelector";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { addArticlesListActions } from "features/ArticlesList/model/slices/addArticlesListSlice";
import { Card } from "shared/ui/Card/Card";
import { Input } from "shared/ui/Input/Input";
import { getArticlesListOrder, getArticlesListSort, getArticlesListType } from "pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { ArticlesSortSelectors } from "entities/Article/ui/ArticlesSortSelectors/ArticlesSortSelectors";
import { SortTypeOrder } from "shared/types";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import { fetchArticlesList } from "features/ArticlesList/model/services/fetchArticlesList/fetchArticlesList";
import { useDebounce } from "shared/lib/hooks/useDebounce/useDebounce";
import cls from "./ArticlesPageFilters.module.scss";
import { ArticleViewSelector } from "../ArticleViewSelector/ArticleViewSelector";

interface ArticlesPageFiltersProps {
  className?: string;

}

export const ArticlesPageFilters = memo(({ className }: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const view = useSelector(getArticleListView);
    const dispatch = useAppDispatch();

    const order = useSelector(getArticlesListOrder);
    const sort = useSelector(getArticlesListSort);
    const tabType = useSelector(getArticlesListType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 550);

    const onToggleView = (articleView : ArticleTypeView) => {
        dispatch(addArticlesListActions.setView(articleView));
    };

    const onChangeSort = (newSort : ArticleSortField) => {
        dispatch(addArticlesListActions.setSort(newSort));
        dispatch(addArticlesListActions.setPage(1));
        fetchData();
    };

    const onChangeOrder = (newOrder : SortTypeOrder) => {
        dispatch(addArticlesListActions.setOrder(newOrder));
        dispatch(addArticlesListActions.setPage(1));
        fetchData();
    };

    const onChangeSearch = (searchValue : string) => {
        dispatch(addArticlesListActions.setSearch(searchValue));
        dispatch(addArticlesListActions.setPage(1));
        debouncedFetchData();
    };

    const onChangeType = (value : ArticleType) => {
        dispatch(addArticlesListActions.setType(value));
        dispatch(addArticlesListActions.setPage(1));
        fetchData();
    };

    return (
        <div className={classNames(cls.ArticlesPageFilters, [className])}>
            <div className={cls.sortWrapper}>
                <ArticlesSortSelectors order={order} sort={sort} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
                <ArticleViewSelector view={view} onToggleView={onToggleView} />
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch} placeholder={t("Поиск")} />
            </Card>
            <ArticleTypeTabs className={cls.tabs} value={tabType} onChangeType={onChangeType} />

        </div>
    );
});
