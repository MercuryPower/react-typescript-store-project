import React from "react";
import { useCallback, useState } from "react";
import { isFunction } from "util";
import { sessionStorageWrapper } from "./storage";


export function useSessionStorageState<T>(key:string, initialValue: T | (() => T)){
    const [value,setValue] = useState(()=>{  
        const saveValue = sessionStorageWrapper.get<T>(key);
        
        if(typeof saveValue !== "undefined"){
            return saveValue;
        }
        // return isFunction(initialValue) ? initialValue() : initialValue
    });

    // const latestValue = useLatest(value)

    const updateValue = useCallback((newValue:React.SetStateAction<T>) => {
        // setValue(newValue);

        sessionStorageWrapper.set(key,value)
    },[key])

    return [value,updateValue] as const;
}