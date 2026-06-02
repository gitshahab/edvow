"use client"

import { useEffect, useState } from "react"


export function useDebounce<T>(value:T, delay: number = 300): T {
    const [ debounceVal, setDebounceVal ] = useState<T>(value);


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceVal(value);
        }, delay);

        return () => { 
            clearTimeout(handler);
        };
    }, [value, delay]);
    
    return debounceVal;
}