import { classNames } from "shared/lib/classNames/classNames.js";

import {
    memo, ReactNode, useRef,
    RefObject,
    UIEvent,
} from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getScrollPosByPath, ScrollSaveActions } from "features/ScrollSave";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { StateSchema } from "app/providers/StoreProvider";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "shared/lib/hooks/useThrottle/useThrottle";
import cls from "./PageWrapper.module.scss";

interface PageProps {
  className?: string;
  children?: ReactNode;
  onScrollEnd?: ()=>void;
}

export const PageWrapper = memo(({ className, children, onScrollEnd }: PageProps) => {
    const triggerRef = useRef(null) as unknown as RefObject<HTMLDivElement>;
    const wrapperRef = useRef(null) as unknown as RefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPos = useSelector((state: StateSchema) => getScrollPosByPath(state, location.pathname));

    const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
        dispatch(ScrollSaveActions.setScrollPos({
            position: event.currentTarget.scrollTop,
            path: location.pathname,
        }));
    }, 600);

    useInitialEffect(() => { wrapperRef.current.scrollTop = scrollPos; });

    useInfiniteScroll({
        triggerRef, wrapperRef, callback: onScrollEnd,
    });

    return (
        <section onScroll={onScroll} ref={wrapperRef} className={classNames(cls.PageWrapper, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>

    );
});
