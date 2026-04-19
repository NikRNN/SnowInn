import { RouteProps } from "react-router-dom";
import { MainPageLazy } from "pages/MainPage/index.js";
import { AboutPageLazy } from "pages/AboutPage/index.js";
import { ProfilePage } from "pages/ProfilePage";
import { NotFoundPage } from "pages/NotFoundPage/index.js";
import { ArticlesPageLazy } from "pages/ArticlesPage";
import { ArticleDetailsPageLazy } from "pages/ArticleDetailsPage";
import { ArticleEditPageLazy } from "pages/ArticleEditPage";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  ARTICLES = "articles",
  ARTICLE_DETAILS = "article_details",
  ARTICLE_CREATE = "article_create",
  ARTICLE_EDIT = "article_edit",
  //
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // + должен идти id профиля
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/article/", // + должен идти id статьи, см роут конфиг
    [AppRoutes.ARTICLE_CREATE]: "/article/create",
    [AppRoutes.ARTICLE_EDIT]: "/article/:id/edit",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageLazy />,
    },

    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageLazy />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPageLazy />,
        authOnly: true,

    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPageLazy />,
        authOnly: true,

    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPageLazy />,

    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPageLazy />, // оставил одинаковые компоненты, потому что создание и редактирование не отличаются особо

    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
