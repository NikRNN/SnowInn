import { useTranslation } from "react-i18next";
import { useSelector , useDispatch } from "react-redux";
import { useCallback ,memo} from "react";
import { RoutePath } from "shared/config/routeConfig/index";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { IconWrapper } from "shared/ui/IconWrapper/IconWrapper";
import {  isAdmin, isEditor , getUserAuthData, userActions } from "entities/User";
import DropdownMenuIcon from "../../../shared/assets/icons/dropdown-icon.svg";
import cls from "./DropdownMenu.module.scss";

const DropDownMenu = DropdownMenuIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

interface DropdownMenuProps {
  className?: string;
}

export const DropdownMenu = memo(({ className }: DropdownMenuProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const authData = useSelector(getUserAuthData);
    const isUserAdmin = useSelector(isAdmin);
    const isUserEditor = useSelector(isEditor);
    const isAdminPanelAvailable = isUserAdmin || isUserEditor;

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if(!authData) {
        return null
    }

    return (
        <Dropdown direction="bottom-left" className={cls.links} items={[
            ...(isAdminPanelAvailable ? [  {
                content: t("Админ-панель"),
                href: RoutePath.admin_panel,
                id: "4"
            }]: []),
            {
                content: t("Мой профиль"),
                href: RoutePath.profile + authData.id,
                id: "1"
            },
            {
                content: t("Мои обзоры"),
                id: "2"
            },
            {
                content: t("Создать тему"),
                href: RoutePath.article_create,
                id: "3"
            },
            {
                content: t("Выйти"),
                onClick: onLogout,
                id: "5"
            }
        ]} trigger={<IconWrapper className={cls.dropdownTrigger} Svg={DropDownMenu}/>}/>
    );
})