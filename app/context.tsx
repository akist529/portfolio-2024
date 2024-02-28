import { createContext, Dispatch, SetStateAction } from "react";
import React from 'react';

export const DarkContext = createContext<
    [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

export const WindowContext = createContext<
    [number, Dispatch<SetStateAction<number>>]
>([0, () => {}]);