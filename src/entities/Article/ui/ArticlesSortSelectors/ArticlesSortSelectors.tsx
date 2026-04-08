import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useCallback, useMemo } from "react";
import { Select, SelectOptions } from "shared/ui/Select/Select";
import { ArticleSortField } from "entities/Article/model/types/article";
import { SortTypeOrder } from "shared/types";
import cls from "./ArticlesSortSelectors.module.scss";

interface ArticlesSortSelectorsProps {
  className?: string;
  sort: ArticleSortField,
  order: SortTypeOrder,
  onChangeOrder: (newOrder : SortTypeOrder) => void,
  onChangeSort : (newSort : ArticleSortField) => void
}

export const ArticlesSortSelectors = memo(({
    className, sort, order, onChangeOrder, onChangeSort,
}: ArticlesSortSelectorsProps) => {
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOptions[]>(() => [
        {
            value: "asc", // настройки json server
            content: t("По возрастанию"),
        },
        {
            value: "desc", // настройки json server
            content: t("По убыванию"),
        },
    ], [t]);

    const sortFieldOptions = useMemo<SelectOptions[]>(() => [ // тут поля для сортировки
        {
            value: ArticleSortField.CREATED,
            content: t("дате создания"),
        },
        {
            value: ArticleSortField.TITLE,
            content: t("названию статьи"),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t("количеству просмотров"),
        },
    ], [t]);

    const onChangeSortHandler = useCallback((newSort : string) => {
        onChangeSort(newSort as ArticleSortField);
    }, [onChangeSort]);

    const onChangeOrderHandler = useCallback((newOrder : string) => {
        onChangeOrder(newOrder as SortTypeOrder);
    }, [onChangeOrder]);

    return (
        <div className={classNames(cls.ArticlesSortSelectors, [className])}>
            <Select options={sortFieldOptions} label={t("Сортировать по")} value={sort} onChange={onChangeSortHandler} />
            <Select className={cls.order} options={orderOptions} label={t("по")} value={order} onChange={onChangeOrderHandler} />
        </div>
    );
});
