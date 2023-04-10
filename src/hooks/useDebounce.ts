import { useState, useEffect } from "react";

export function useDebounce(value: string, delay: number) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const hander = setTimeout(() => setDebounce(value), delay);

        return () => {
            clearTimeout(hander);
        };
    }, [value, delay]);

    return debounce;
}
