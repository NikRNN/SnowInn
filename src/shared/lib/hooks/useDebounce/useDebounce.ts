import { RefObject, useCallback, useRef } from "react";
// eslint-disable-next-line
    // @ts-ignore 
// eslint-disable-next-line
export function useDebounce(callback: (...args: any[])=>void, delay: number) { //хук для того, чтобы при вводе в строке поиска запросы не отправлялись после каждого символа
    // eslint-disable-next-line
    // @ts-ignore 
// eslint-disable-next-line
    const timer = useRef(null) as RefObject<any>;
    // eslint-disable-next-line
    // @ts-ignore 
    // eslint-disable-next-line
    return useCallback((...args: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }

        timer.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
