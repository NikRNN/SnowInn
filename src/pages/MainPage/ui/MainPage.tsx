import { useTranslation } from "react-i18next";
import { BugButton } from "app/providers/ErrorBoundary/index.js";
import { classNames } from "shared/lib/classNames/classNames";
import { Text, TextSize, TextTheme } from "shared/ui/Text/Text";
import cls from "./MainPage.module.scss";

function MainPage() {
    const { t } = useTranslation("home");

    return (
        <div className={classNames(cls.mainPage)} style={{ color: "black" }}>
            <BugButton />
            <div className={cls.mainText}>
                <Text title="ПРИКЛЮЧЕНИЕ" size={TextSize.XXL_SECONDARY_FONT} theme={TextTheme.MAIN} />
                <Text title="НАЧИНАЕТСЯ" size={TextSize.XXL_SECONDARY_FONT} theme={TextTheme.MAIN} />
                <Text title="ЗДЕСЬ" size={TextSize.XXL_SECONDARY_FONT} theme={TextTheme.MAIN} />
            </div>
        </div>
    );
}

export default MainPage;
