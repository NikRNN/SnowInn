import { Profile } from "entities/Profile"

export enum ValidateProfileError {
    INCORRECT_FIRSTNAME_LASTNAME = "INCORRECT_FIRSTNAME_LASTNAME",
    INCORRECT_AGE = "INCORRECT_AGE",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
}

export interface ProfileSchema {
    data?: Profile, // приходит с сервера
    dataForm?: Profile, // приходит с формы (то, что ввел пользователь)
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateError?: ValidateProfileError[]
}