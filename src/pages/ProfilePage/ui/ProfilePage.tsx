import { PageWrapper } from "widgets/PageWrapper/PageWrapper.js";
import { classNames } from "shared/lib/classNames/classNames.js";
import { EditProfileCard } from "features/editProfileCard";
import { useParams } from "react-router-dom";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import cls from "./ProfilePage.module.scss";


interface ProfilePageProps {
  className?: string;
}
export function ProfilePage({ className }: ProfilePageProps) {
    const { id } = useParams();
    const {t} = useTranslation()
    
    if(!id) {
        return <Text text={t("Профиль не найден")}/>
    }

    return (
        <PageWrapper className={classNames(cls.ProfilePage, [className])}>
            <EditProfileCard id={id}/>
        </PageWrapper>
    );
}

export default ProfilePage;
