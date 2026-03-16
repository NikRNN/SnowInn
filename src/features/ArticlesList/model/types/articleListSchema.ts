import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleTypeView } from "entities/Article";

export interface ArticlesListSchema extends EntityState<Article, string> {
    isLoading?: boolean,
    error?: string,
    view: ArticleTypeView,

    // дальше для пагинации
    page: number, // номер страницы, пойдет на бэк
    limit?: number, // сколько подгружать за раз, пойдет на бэк
    hasMore: boolean, // есть ли еще на сервере статьи для дальнейшей подгрузки,

    _inited: boolean; // определяет, загрузился уже стейт или еще нет (для того, чтобы при возврате из статьи в список статей, запросы на сервер не отрабатывали снова)
}
