import { AppRoutes } from "./appRoutes";

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile/", // + должен идти id профиля
    [AppRoutes.ARTICLES]: "/articles",
    [AppRoutes.ARTICLE_DETAILS]: "/article/", // + должен идти id статьи, см роут конфиг
    [AppRoutes.ARTICLE_CREATE]: "/article/create",
    [AppRoutes.ARTICLE_EDIT]: "/article/:id/edit",
    [AppRoutes.ADMIN_PANEL]: "/adminpanel",
    [AppRoutes.FORBIDDEN]: "/forbidden",
    [AppRoutes.NOT_FOUND]: "*",
};