import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { PageWrapper } from "shared/ui/PageWrapper/PageWrapper";
import cls from "./NotFoundPage.module.scss";

export interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = memo(
    ({ className }: NotFoundPageProps) => {
        const { t } = useTranslation("pageNotFound");

        return (
            <PageWrapper className={classNames(cls.NotFoundPage, [className])}>
                {t("Страница не найдена")}
            </PageWrapper>
        );
    },

);
