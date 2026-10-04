import { classNames } from "@/shared/lib/classNames/classNames.js";
import {
    useCallback, useEffect, useRef, useState,
} from "react";
import { Portal } from "../Portal/Portal.js";
import { Overlay } from "../Overlay/Overlay.js";
import { useAnimationLibs } from "@/shared/lib/component/AnimationLazyProvider/AnimationLazyProvider.js";
import { Loader } from "../Loader/Loader.js";
import { ModalProps } from "../Modal/Modal.js";
import cls from "./AnimatedModal.module.scss";

export interface AnimatedModalProps extends ModalProps {
  className?: string;
}

function AnimatedModalContent({
    className, children, isOpen, onClose, lazy,
}: ModalProps) {
    const [isClose, setIsClose] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timeRef = useRef<NodeJS.Timeout>(undefined);

    const {Spring, Gesture} = useAnimationLibs();

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

    const SWIPE_THRESHOLD = 300;

    const [{ x, y, opacity }, api] = Spring.useSpring(() => ({
        x: 0,
        y: 0,
        opacity: 1,
    }));

    const bind = Gesture.useDrag(
        ({ movement: [x, y], last }) => {
            if (!last) {
                api.start({
                    x,
                    y,
                    immediate: true,
                });

                return;
            }

            const distance = Math.hypot(x, y);

            if (distance < SWIPE_THRESHOLD) {
                api.start({
                    x: 0,
                    y: 0,
                    opacity: 1,
                    config: {
                        duration: 160,
                    },
                });

                return;
            }

            const isHorizontal = Math.abs(x) > Math.abs(y);

            if (isHorizontal) {
                const targetX = x > 0
                    ? window.innerWidth
                    : -window.innerWidth;

                api.start({
                    x: targetX,
                    y,
                    opacity: 0,
                    config: {
                        duration: 160,
                    },
                    onRest: () => {
                        onClose?.();
                    },
                });
            } else {
                const targetY = y > 0
                    ? window.innerHeight
                    : -window.innerHeight;

                api.start({
                    x,
                    y: targetY,
                    opacity: 0,
                    config: {
                        duration: 200,
                    },
                    onRest: () => {
                        onClose?.();
                    },
                });
            }
        
        },
    );

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, [className], mods)}>
                <Overlay onClick={closeHandler}/>
                <Spring.animated.div
                    className={cls.content}
                    style={{ x, y, opacity }}
                    {...bind()}
                >
                    {children}
                </Spring.animated.div>
                
            </div>
        </Portal>
    );
}


export function AnimatedModal(props: ModalProps) {
    const {isLoaded} = useAnimationLibs();

    if(!isLoaded) {
        return <Loader/>
    }
       
    return <AnimatedModalContent {...props} />

}
