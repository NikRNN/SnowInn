import { useEffect } from "react";

export function useInitialEffect(callback : ()=>void) {
    useEffect(() => {
        const isStorybook = import.meta.env.STORYBOOK === "true";
        if (!isStorybook) {
            callback();
        }
    }, []);
}
