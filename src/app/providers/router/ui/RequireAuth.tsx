import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getUserAuthData, UsersRoles , getUserRoles } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/index";
import { ReactNode, useMemo } from "react";

interface RequireAuthProps {
    children: ReactNode;
    role?: UsersRoles[]
}

export function RequireAuth(props : RequireAuthProps) : ReactNode {
    const isAuth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles)

    const { children, role } = props;

    const hasRequiredRoles = useMemo(()=>{
        if(!role) {
            return true
        }
        return role.some(requiredRole => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole
        })
    }, [role, userRoles])

    if (!isAuth) {
    
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    if(!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
    }
    
    return children;
}


