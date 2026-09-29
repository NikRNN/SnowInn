import { classNames } from "shared/lib/classNames/classNames.js";
import {
    ReactNode, useCallback, useEffect, useRef, useState,
} from "react";
import { Portal } from "../Portal/Portal.js";
import { Overlay } from "../Overlay/Overlay.js";
import cls from "./Modal.module.scss";

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: ()=>void;
  lazy?: boolean;
}

export function Modal({
    className, children, isOpen, onClose, lazy,
}: ModalProps) {
    const [isClose, setIsClose] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<NodeJS.Timeout>(undefined);

    const mods: Record<string, boolean | undefined> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClose,
    };

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClose(true);
            timeRef.current = setTimeout(() => { onClose(); setIsClose(false); }, 300);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler();
        }
    }, [closeHandler]);

  
    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, [className], mods)}>
                <Overlay onClick={closeHandler}/>
                <div className={cls.content}
                >
                    {children}
                </div>
                
            </div>
        </Portal>
    );
}


