import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleTypeView } from "entities/Article";
import { ArticleSortField, ArticleType } from "entities/Article/model/types/article";
import { SortTypeOrder } from "shared/types";

export interface ArticlesListSchema extends EntityState<Article, string> {
    isLoading?: boolean,
    error?: string,
    // дальше для пагинации
    page: number, // номер страницы, пойдет на бэк
    limit?: number, // сколько подгружать за раз, пойдет на бэк
    hasMore: boolean, // есть ли еще на сервере статьи для дальнейшей подгрузки,
    // фильтры
    order: SortTypeOrder,
    sort: ArticleSortField,
    search: string, // строка поиска
    view: ArticleTypeView,
    type: ArticleType,
    _inited: boolean; // определяет, загрузился уже стейт или еще нет (для того, чтобы при возврате из статьи в список статей, запросы на сервер не отрабатывали снова)
}
