import { createContext } from "react";

export const DarkContext = createContext({
    darkMode: false,
    setDarkMode: () => {}
});

export const WindowContext = createContext({
    width: 0,
    setWidth: () => {}
});