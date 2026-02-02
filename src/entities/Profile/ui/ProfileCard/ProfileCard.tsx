import { classNames, Mods } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Text, TextPosition, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Country } from "entities/Country/model/types/country";
import { CountrySelect } from "entities/Country/ui/CountrySelect";
import { Profile } from "../../model/types/profile";

import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeFirstName?: (value : string)=>void;
  onChangeLastName?: (value : string)=>void;
  onChangeCountry?: (country : Country) => void;
  onChangeCity? : (value : string) => void;
  onChangeAge?: (value : string) => void;
  onChangeUsername?: (value : string) => void;
  onChangeAvatar?: (value : string) => void;
  readonly?: boolean;
}

export function ProfileCard({
    className, data, error, isLoading, onChangeFirstName, onChangeLastName, readonly, onChangeAge, onChangeCountry, onChangeCity, onChangeUsername, onChangeAvatar,
}: ProfileCardProps) {
    const { t } = useTranslation("profileCard");

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, [className, cls.loading], {})}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, [className, cls.error], {})}>
                <Text position={TextPosition.CENTER} theme={TextTheme.ERROR} title={t("У нас что-то сломалось, уже чиним")} text={t("А вы пока попробуйте обновить страницу")} />
            </div>
        );
    }

    const mods : Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.ProfileCard, [className], mods)}>

            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )}

                <Input value={data?.firstname} placeholder={t("Ваше имя")} className={cls.input} onChange={onChangeFirstName} readonly={readonly} />
                <Input value={data?.lastname} placeholder={t("Ваша фамилия")} className={cls.input} onChange={onChangeLastName} readonly={readonly} />
                <Input value={data?.age || ""} placeholder={t("Ваш возраст")} className={cls.input} onChange={onChangeAge} readonly={readonly} />
                <Input value={data?.city} placeholder={t("Ваш город")} className={cls.input} onChange={onChangeCity} readonly={readonly} />
                <Input value={data?.username} placeholder={t("Ваше имя пользователя")} className={cls.input} onChange={onChangeUsername} readonly={readonly} />
                <Input value={data?.avatar} placeholder={t("Укажите ссылку на Ваш аватар")} className={cls.input} onChange={onChangeAvatar} readonly={readonly} />
                <CountrySelect readonly={readonly} value={data?.country} onChange={onChangeCountry} />

            </div>
        </div>
    );
}
