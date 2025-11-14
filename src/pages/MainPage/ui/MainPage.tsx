import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary/index.js";
import { Counter } from "entities/index.js";

function MainPage() {
    const { t } = useTranslation();
    return (
        <>
            {t("Главная страница")}
            <BugButton />
            <Counter />
        </>
    );
}

export default MainPage;
