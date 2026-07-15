import { classNames} from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button.js";
import { useCallback, useState, memo } from "react";
import { LoginModal } from "features/authByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, getUserRoles, isAdmin, isEditor, userActions } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/index";
import { Dropdown } from "shared/ui/Dropdown/Dropdown";
import { IconWrapper } from "shared/ui/IconWrapper/IconWrapper";
import DropdownMenuIcon from "../../../shared/assets/icons/dropdown-icon.svg";
import cls from "./Navbar.module.scss";


const DropDownMenu = DropdownMenuIcon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

export interface NavbarProps {
  className?: string;
}

export const Navbar = memo(
    ({ className }: NavbarProps) => {
        const { t } = useTranslation();
        const [isOpen, setIsOpen] = useState(false);
        const authData = useSelector(getUserAuthData);
        const dispatch = useDispatch();
        const isUserAdmin = useSelector(isAdmin);
        const isUserEditor = useSelector(isEditor);
            

        const onCloseModal = useCallback(() => {
            setIsOpen(false);
        }, []);

        const onShowModal = useCallback(() => {
            setIsOpen(true);
        }, []);

        const onLogout = useCallback(() => {
            dispatch(userActions.logout());
        }, [dispatch]);


        const isAdminPanelAvailable = isUserAdmin || isUserEditor;
    
        if (authData) {
            return (
                <div className={classNames(cls.navbar, [className])}>
                    {/* <AppLink className={cls.createBtn} to={RoutePath.article_create}>Создать статью...</AppLink> */}
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
                    ]} trigger={<IconWrapper className={cls.navbarTrigger} Svg={DropDownMenu}/>}/>
                </div>
            );
        }

        return (
            <header className={classNames(cls.navbar, [className])}>
                <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                    {t("Войти")}
                </Button>

                {isOpen && (
                    <LoginModal
                        isOpen={isOpen}
                        onClose={onCloseModal}
                    />
                )}
            
            </header>
        );
    },

);
