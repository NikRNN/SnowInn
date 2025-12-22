// тут внутри лежит логин форм, наружу отдаю только логин модал

import { classNames } from "shared/lib/classNames/classNames.js";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { LoginForm } from "../LoginForm/LoginForm";
import cls from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: ()=>void;
}

export function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
    const { t } = useTranslation();

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, [className])}><LoginForm /></Modal>
    );
}
