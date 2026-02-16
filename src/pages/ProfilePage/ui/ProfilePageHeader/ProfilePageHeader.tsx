import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import {
    getProfileData, getProfileReadOnly, ProfileActions, updateProfileData,
} from "entities/Profile";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import cls from "./ProfilePageHeader.module.scss";

interface ProfilePageHeaderProps {
  className?: string;
}

export function ProfilePageHeader({ className }: ProfilePageHeaderProps) {
    const { t } = useTranslation("profilePageHeader");

    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => { dispatch(ProfileActions.setReadonly(false)); }, [dispatch]);

    const onCancelEdit = useCallback(() => { dispatch(ProfileActions.cancelEdit()); }, [dispatch]);

    const onSaveProfileData = useCallback(() => { dispatch(updateProfileData()); }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHeader, [className])}>
            <Text title={t("Профиль")} />

            {canEdit && (

                <div className={cls.btnWrapper}>

                    {readonly
                        ? (
                            <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                                {t("Редактировать")}
                            </Button>
                        )
                        : (
                            <div className={cls.btnWrapper}>
                                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onSaveProfileData}>
                                    {t("Сохранить")}
                                </Button>
                                <Button className={cls.cancelBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                                    {t("Отмена")}
                                </Button>
                            </div>
                        )}

                </div>
            )}

        </div>
    );
}
