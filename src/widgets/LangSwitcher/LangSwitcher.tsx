import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames.js";
import { Button, ThemeButton } from "shared/ui/Button/Button.js";

interface LangSwitcherProps {
  className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggle}
            className={classNames("", [className], {})}
        >
            {t("Язык")}
        </Button>
    );
}
