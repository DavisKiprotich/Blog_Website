'use client';

import { createContext, useState } from "react";

const getFromLocalStorage = () =>{

    if(typeof window !== undefined){
        const value = localStorage.getItem('theme');
        return value || 'light';
    }
};

export const ThemeContext = createContext()

export const ThemeContextProvider  = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    })
    return <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>;
}