import { UsersRoles } from "../const/consts";

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UsersRoles[]
}

export interface UserSchema {
    authData?: User // если что-то есть там, то пользователь авторизован, если пусто - то не авторизован
    initedUser?: boolean // после инициализации данных о пользователе станет true
}
