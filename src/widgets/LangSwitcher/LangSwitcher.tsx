import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames.js";
import { Button, ButtonTheme } from "shared/ui/Button/Button.js";
import { memo } from "react";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(
    ({ className, short }: LangSwitcherProps) => {
        const { t, i18n } = useTranslation();

        const toggle = () => {
            i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
        };

        return (
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={toggle}
                className={classNames("", [className], {})}
            >
                {short ? t("Сокращенный язык") : t("Полный язык")}
            </Button>
        );
    },
);
