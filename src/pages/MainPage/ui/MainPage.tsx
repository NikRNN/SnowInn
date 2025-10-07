import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary/index.js";

function MainPage() {
    const { t } = useTranslation();
    return (
        <>
            {t("Главная страница")}
            <BugButton />
        </>
    );
}

export default MainPage;
