import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Text } from "shared/ui/Text/Text";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileisLoading } from "../../model/selectors/getProfileLoading/getProfileLoading";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
}

export function ProfileCard({ className }: ProfileCardProps) {
    const { t } = useTranslation();

    const profile = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileisLoading);

    return (
        <div className={classNames(cls.ProfileCard, [className])}>
            <div className={cls.header}>
                <Text title="Профиль" />
                <Button theme={ButtonTheme.OUTLINE}>
                    {t("Редактировать")}
                </Button>
            </div>
            <div>
                <Input value={profile?.firstname} placeholder="Ваше имя" className={cls.input} />
                <Input value={profile?.lastname} placeholder="Ваша фамилия" className={cls.input} />
            </div>
        </div>
    );
}
