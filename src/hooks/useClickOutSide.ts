import { useEffect, RefObject } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, handler: (e: MouseEvent | TouchEvent) => void) {
    useEffect(() => {
        const listener = (e: MouseEvent | TouchEvent) => {
            const ele = ref.current;

            if (!ele || ele.contains(e.target as Node)) {
                return;
            }

            handler(e);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export { useClickOutside };
