import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import {memo, useEffect} from "react";

export interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = memo(({ className }: AdminPanelPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames("", [className])}>
            {t("Админ-панель")}
        </div>
    );
})

export default AdminPanelPage