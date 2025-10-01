import { useTranslation } from "react-i18next";

function MainPage() {
    const { t } = useTranslation();
    return <>{t("Главная страница")}</>;
}

export default MainPage;
