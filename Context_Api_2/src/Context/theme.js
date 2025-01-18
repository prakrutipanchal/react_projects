import React from "react";
import { createContext, useContext } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ThemeContext.Provider

export default function useTheme()
{
    return useContext(ThemeContext)
}