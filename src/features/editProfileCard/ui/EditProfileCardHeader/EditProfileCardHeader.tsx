import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { getProfileData, getProfileReadOnly} from "../../model/selectors/editProfileCardSelectors";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { ProfileActions } from "../../model/slices/profileSlice";
import { useSelector } from "react-redux";
import { useCallback , memo } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack/HStack/HStack";
import cls from "./EditProfileCerdHeader.module.scss";

interface EditProfileCardHeaderProps {
  className?: string;
}

export const EditProfileCardHeader = memo(({ className }: EditProfileCardHeaderProps) => {
    const { t } = useTranslation("profilePageHeader");

    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(ProfileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(ProfileActions.cancelEdit());
    }, [dispatch]);

    const onSaveProfileData = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.EditProfileCardHeader, [className])}>
            <HStack justifyContent="between" className={classNames(cls.ProfilePageHeader, [className])}>
                <Text title={t("Профиль")} />

                {canEdit && (
                    <>
                        {readonly
                            ? (
                                <Button data-testid="EditProfileCardHeader.EditBtn" className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                                    {t("Редактировать")}
                                </Button>
                            )
                            : (
                                <HStack gap="10">
                                    <Button data-testid="EditProfileCardHeader.SaveBtn" className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onSaveProfileData}>
                                        {t("Сохранить")}
                                    </Button>
                                    <Button data-testid="EditProfileCardHeader.CancelBtn" className={cls.cancelBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                        {t("Отмена")}
                                    </Button>
                                </HStack>
                            )}
                    </>
                )}
            </HStack>
        </div>
    );
});