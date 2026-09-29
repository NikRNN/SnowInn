import { createContext, useEffect, useRef, useState , useMemo , useContext } from "react";
import type { ReactNode } from "react";


type SpringType = typeof import("@react-spring/web");
type GestureType = typeof import("@use-gesture/react");

interface AnimationContextPayload {
    Gesture?: GestureType,
    Spring?: SpringType,
    isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextPayload>({});

const getAsyncAnimationModules = ()=> {

    return Promise.all([
        import("@react-spring/web"),
        import("@use-gesture/react")
    ])

}

export const useAnimationLibs = ()=> {
    return useContext(AnimationContext) as Required<AnimationContextPayload>
}

export function AnimationLazyProvider({children} : {children: ReactNode}) {

    const SpringRef = useRef<SpringType>(undefined);
    const GestureRef = useRef<GestureType>(undefined);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        getAsyncAnimationModules().then(([Spring, Gesture])=>{
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded(true);
        })
    }, []);

    const value = useMemo(()=>({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded
    }), [isLoaded])

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>

    )
}



