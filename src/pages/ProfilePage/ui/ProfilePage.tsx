import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { ProfileReducer } from "entities/Profile";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: ProfileReducer,
};

export function ProfilePage({ className }: ProfilePageProps) {
    const { t } = useTranslation();

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", [className])}>
                {t("Profile Page")}
            </div>

        </DynamicSomethingLoader>

    );
}

export default ProfilePage;
