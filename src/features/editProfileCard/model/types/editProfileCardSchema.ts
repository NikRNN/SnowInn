import { Profile } from "entities/Profile"
import { ValidateProfileError } from "../const/consts"

export interface ProfileSchema {
    data?: Profile, // приходит с сервера
    dataForm?: Profile, // приходит с формы (то, что ввел пользователь)
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateError?: ValidateProfileError[]
}