import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary/index.js";
import { PageWrapper } from "shared/ui/PageWrapper/PageWrapper";

function MainPage() {
    const { t } = useTranslation("home");

    return (
        <div style={{ color: "black" }}>
            {t("Главная страница")}
            <BugButton />
        </div>
    );
}

export default MainPage;
