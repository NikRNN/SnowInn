import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button.js";
import { useCallback, useState } from "react";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuthData, userActions } from "entities/User";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, [className])}>
                <Button onClick={onLogout} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                    {t("Выйти")}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, [className])}>
            <Button onClick={onShowModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                {t("Войти")}
            </Button>

            {isOpen && (
                <LoginModal
                    isOpen={isOpen}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
}
