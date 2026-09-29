import { classNames } from "shared/lib/classNames/classNames.js";
import { Modal } from "shared/ui/Modal/Modal";
import { ComponentType, Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import type { ModalProps } from "shared/ui/Modal/Modal";
import cls from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: ()=>void;
  ModalContent?: ComponentType<ModalProps>
}

export function LoginModal({ className, isOpen, onClose, ModalContent = Modal }: LoginModalProps) {
    return (
        <ModalContent lazy isOpen={isOpen} onClose={onClose} className={classNames(cls.LoginModal, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </ModalContent>
    );
}
