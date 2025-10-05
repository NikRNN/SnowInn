import { RouteProps } from "react-router-dom";
import { MainPageLazy } from "pages/MainPage/index.js";
import { AboutPageLazy } from "pages/AboutPage/index.js";
import { NotFoundPage } from "pages/NotFoundPage/index.js";

export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  NOT_FOUND = "not_found"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.NOT_FOUND]: "*",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageLazy />,
    },

    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPageLazy />,
    },
    [AppRoutes.NOT_FOUND] : {
        path: RoutePath.not_found,
        element: <NotFoundPage/>
    }
};
