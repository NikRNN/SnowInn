import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ItemsPropsType } from "../Sidebar/model/items";
import cls from "./SidebarItem.module.scss";

interface SibebarItemProps {
  item?: ItemsPropsType;
  collapsed: boolean
}

export const SidebarItem = memo(
    ({ item, collapsed }: SibebarItemProps) => {
        const { t } = useTranslation();
        const { path, text, Icon } = item!;

        return (
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to={path}
                className={classNames(cls.item, [], { [cls.collapsed]: collapsed })}
            >

                <Icon className={cls.icon} />

                <span className={cls.link}>
                    {t(text)}
                </span>
            </AppLink>
        );
    },
);
