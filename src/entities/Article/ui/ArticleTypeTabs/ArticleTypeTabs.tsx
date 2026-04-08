import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";
import { Tabs } from "shared/ui/Tabs/Tabs";
import type { TabItem } from "shared/ui/Tabs/Tabs";
import { ArticleType } from "entities/Article/model/types/article";

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;

}

export const ArticleTypeTabs = memo(({ className, value, onChangeType }: ArticleTypeTabsProps) => {
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.SKI_TRACK,
            content: t("Трассовое катание"),
        },
        {
            value: ArticleType.FREERIDE,
            content: t("Фрирайд"),
        },
        {
            value: ArticleType.ALL,
            content: t("Все статьи"),
        },
    ], [t]);

    const onTabClick = (tab : TabItem) => {
        onChangeType(tab.value as ArticleType);
    };

    return (
        <Tabs tabsList={typeTabs} value={value} onTabClick={onTabClick} className={classNames("", [className])} />
    );
});
