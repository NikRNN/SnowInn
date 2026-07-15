import { RouteProps } from "react-router-dom";
import { MainPageLazy } from "pages/MainPage/index.js";
import { AboutPageLazy } from "pages/AboutPage/index.js";
import { ProfilePage } from "pages/ProfilePage";
import { NotFoundPage } from "pages/NotFoundPage/index.js";
import { ArticlesPageLazy } from "pages/ArticlesPage";
import { ArticleDetailsPageLazy } from "pages/ArticleDetailsPage";
import { ArticleEditPageLazy } from "pages/ArticleEditPage";
import { AdminPanelPageLazy } from "pages/AdminPanelPage";
import { UsersRoles } from "entities/User";
import { ForbiddenPageLazy } from "pages/ForbiddenPage";
import { AppRoutes, RoutePath } from "shared/config/routeConfig/index";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean,
    role?: UsersRoles[]
}


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

    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanelPageLazy/>, 
        authOnly: true,
        role: [UsersRoles.ADMIN, UsersRoles.EDITOR]
    },

    [AppRoutes.FORBIDDEN]: {
        path: RoutePath.forbidden,
        element: <ForbiddenPageLazy/>, 
        authOnly: true,
        role: [UsersRoles.ADMIN, UsersRoles.EDITOR]
    },
   
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};

