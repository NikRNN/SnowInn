import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal.js";
import { Button, ButtonTheme } from "shared/ui/Button/Button.js";
import { useCallback, useState } from "react";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, [className])}>
            <Button onClick={onToggleModal} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                {t("Войти")}
            </Button>

            <Modal isOpen={isOpen} onClose={onToggleModal}>
                {/* eslint-disable i18next/no-literal-string */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quia magni rerum inventore eaque at sit, recusandae dolorum reprehenderit saepe nobis nulla quaerat?
                Odit laudantium labore doloribus dolores? Nulla, eos hic.
            </Modal>
        </div>
    );
}
