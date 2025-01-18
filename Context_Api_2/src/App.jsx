import React from "react";
import './App.css'
import { useState } from "react";
import { ThemeProvider } from "./Context/theme";
import { useEffect } from "react";
import ThemeBtn1 from './Components/ThemeBtn1'
import Card from './Components/Card'

export default function App()
{
  const [themeMode, setThemeMode] = useState()

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
      document.querySelector('html').classList.remove("light", "dark")
      document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return(
    <ThemeProvider value={{lightTheme, darkTheme, themeMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn1></ThemeBtn1>
            </div>

            <div className="w-full max-w-sm mx-auto">
                  <Card></Card>
            </div>
        </div>
      </div>
      </ThemeProvider>
  )
}