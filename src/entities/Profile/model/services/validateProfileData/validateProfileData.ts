import { ValidateProfileError, type Profile } from "../../types/profile";

export const validateProfileData = (data? : Profile) => {
    if (!data) {
        return [ValidateProfileError.NO_DATA];
    }
    const { firstname, lastname, age } = data;

    const errors : ValidateProfileError[] = [];

    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME);
    }

    if (!age || age <= 9) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    return errors;
};
