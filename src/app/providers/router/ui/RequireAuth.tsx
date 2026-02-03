import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { ReactNode } from "react";

interface RequireAuthProps {
    children: ReactNode;
}

export function RequireAuth(props : RequireAuthProps) : ReactNode {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();

    const { children } = props;

    if (!isAuth) {
    // If not authenticated, redirect to the login page
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    // If authenticated, render child routes
    return children;
}
