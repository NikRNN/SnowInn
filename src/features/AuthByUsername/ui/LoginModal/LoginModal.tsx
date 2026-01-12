// тут внутри лежит логин форм, наружу отдаю только логин модал

import { classNames } from "shared/lib/classNames/classNames.js";
import { Modal } from "shared/ui/Modal/Modal";
import { Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import cls from "./LoginModal.module.scss";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: ()=>void;
}

export function LoginModal({ className, isOpen, onClose }: LoginModalProps) {
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
}
