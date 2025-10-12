import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button.js";
import cls from "./PageError.module.scss";

interface PageErrorProps {
  className?: string;
}

export function PageError({ className }: PageErrorProps) {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, [className])}>
            <h1 className={cls.title}>{t("Произошла непредвиденная ошибка")}</h1>
            <p className={cls.description}>{t("Мы уже работаем над ее исправлением, а пока попробуйте обновить страницу")}</p>
            <Button className={cls.reloadButton} onClick={reloadPage}>{t("Обновить страницу")}</Button>
        </div>
    );
}
