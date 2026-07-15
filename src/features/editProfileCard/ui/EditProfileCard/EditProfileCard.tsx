import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo , useCallback } from "react";
import {getProfileError, getProfileForm, getProfileisLoading, getProfileReadOnly, getProfileValidateError} from "../../model/selectors/editProfileCardSelectors";
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { ProfileActions, ProfileReducer } from "../../model/slices/profileSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Country } from "entities/Country";
import { ProfileCard } from "entities/User";
import { Text , TextTheme } from "shared/ui/Text/Text";
import { ValidateProfileError } from "../../model/const/consts";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { EditProfileCardHeader } from "../EditProfileCardHeader/EditProfileCardHeader";
interface EditProfileCardProps {
    className?: string;
    id?: string
}

export const EditProfileCard = memo((props: EditProfileCardProps) => {

    const { className, id } = props;
    const dispatch = useAppDispatch();
    const { t } = useTranslation("profilePage");

    const profileForm = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileisLoading);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateError);
    
    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

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

    const reducers: ReducersList = {
        profile: ProfileReducer,
    };

    return (
        <DynamicSomethingLoader reducers={reducers}>
            <div className={classNames("", [className], {})}>
                <EditProfileCardHeader/>
                {validateErrors?.length && validateErrors.map((err) => <Text data-testid="EditProfileCard.Error" theme={TextTheme.ERROR} text={translateValidateErrors[err]} key={err} />)}
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
});