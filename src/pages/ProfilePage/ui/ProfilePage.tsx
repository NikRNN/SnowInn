import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import {
    fetchProfileData, ProfileReducer, getProfileError, getProfileForm,
    getProfileisLoading,
    ProfileActions,
    getProfileReadOnly,
    getProfileValidateError,
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ProfileCard } from "entities/User";
import { useSelector } from "react-redux";
import { Country } from "entities/Country/model/types/country";
import { TextTheme, Text } from "shared/ui/Text/Text";
import { ValidateProfileError } from "entities/Profile/model/types/profile";

import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: ProfileReducer,
};

export function ProfilePage({ className }: ProfilePageProps) {
    const { t } = useTranslation("profilePage");

    const profileForm = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileisLoading);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateError);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const env = import.meta.env.VITE_APP_ENV;
        console.log("APP ENV:", env);
        console.log("Full env object:", import.meta.env);
        const isStorybook = import.meta.env.STORYBOOK === "true";
        if (!isStorybook) {
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstName = useCallback((value : string) => {
        dispatch(ProfileActions.updateProfileForm({ firstname: value }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value : string) => {
        dispatch(ProfileActions.updateProfileForm({ lastname: value }));
    }, [dispatch]);

    const onChangeAge = useCallback((value : string) => {
        if (value === "") {
            dispatch(ProfileActions.updateProfileForm({ age: 0 }));
            return;
        }
        const onlyDigits = /^\d+$/;
        if (!onlyDigits.test(value)) return;

        const numValue = Number(value);

        dispatch(ProfileActions.updateProfileForm({ age: numValue }));
    }, [dispatch]);

    const onChangeCountry = useCallback((value : Country) => {
        dispatch(ProfileActions.updateProfileForm({ country: value }));
    }, [dispatch]);

    const onChangeCity = useCallback((value : string) => {
        dispatch(ProfileActions.updateProfileForm({ city: value }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value : string) => {
        dispatch(ProfileActions.updateProfileForm({ username: value }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value : string) => {
        dispatch(ProfileActions.updateProfileForm({ avatar: value }));
    }, [dispatch]);

    const translateValidateErrors = {
        [ValidateProfileError.INCORRECT_AGE]: t("Неверно указан возраст"),
        [ValidateProfileError.INCORRECT_FIRSTNAME_LASTNAME]: t("Неверно указаны имя или фамилия пользователя"),
        [ValidateProfileError.NO_DATA]: t("Данные пользователя не указаны"),
        [ValidateProfileError.SERVER_ERROR]: t("Ошибка сервера"),
    };

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", [className])}>
                {validateErrors?.length && validateErrors.map((err) => <Text theme={TextTheme.ERROR} text={translateValidateErrors[err]} key={err} />)}
                <ProfilePageHeader />
                <ProfileCard
                    data={profileForm}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCountry={onChangeCountry}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                />
            </div>

        </DynamicSomethingLoader>

    );
}

export default ProfilePage;
