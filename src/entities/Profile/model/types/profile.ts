import { Country } from "../../../Country/model/types/country";

export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}
