import { createSelector } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/StoreProvider/config/types";
import { UsersRoles } from "../../const/consts";


export const getUserRoles = (state : StateSchema) => state.user.authData?.roles


export const isAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UsersRoles.ADMIN)));
export const isEditor = createSelector(getUserRoles, (roles)=>Boolean(roles?.includes(UsersRoles.EDITOR)))
