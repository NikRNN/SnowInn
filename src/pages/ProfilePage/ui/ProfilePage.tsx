import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { DynamicSomethingLoader, ReducersList } from "shared/lib/component/DynamicSomethingLoader";
import { fetchProfileData, ProfileReducer } from "entities/Profile";

import { useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ProfileCard } from "entities/User";

interface ProfilePageProps {
  className?: string;
}

const reducers: ReducersList = {
    profile: ProfileReducer,
};

export function ProfilePage({ className }: ProfilePageProps) {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    useEffect(() => { dispatch(fetchProfileData()); }, [dispatch]);

    return (
        <DynamicSomethingLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames("", [className])}>
                <ProfileCard />
            </div>

        </DynamicSomethingLoader>

    );
}

export default ProfilePage;
