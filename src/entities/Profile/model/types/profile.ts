import { Country } from "entities/Country/model/types/country";

export enum ValidateProfileError {
    INCORRECT_FIRSTNAME_LASTNAME = "INCORRECT_FIRSTNAME_LASTNAME",
    INCORRECT_AGE = "INCORRECT_AGE",
    NO_DATA = "NO_DATA",
    SERVER_ERROR = "SERVER_ERROR"
}

export interface Profile {
    id?: string,
  firstname?: string,
  lastname?: string,
  age?: number,
  country?: Country,
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
    data?: Profile, // приходит с сервера
    dataForm?: Profile, // приходит с формы (то, что ввел пользователь)
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateError?: ValidateProfileError[]
}
