import {useEffect} from "react";

export function useBeforeUnload(handler:(this: Window, ev: WindowEventMap["beforeunload"]) => any){
    useEffect(() => {
        window.addEventListener('beforeunload', handler);
        return () => window.removeEventListener('beforeunload', handler);
    }, []);
}