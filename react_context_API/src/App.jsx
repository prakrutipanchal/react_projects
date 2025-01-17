// import React from "react";
// import './App.css'
// import Login from "./Components/Login/Login.jsx";
// import Profile from "./Components/Profile/Profile.jsx";
// import UserContextProvider from './Context/UserContextProvider.jsx'

// export default function App()
// {
//   return(
//     <UserContextProvider>
//       <h1 className="bg-pink-600 text-sm">Context_API_Exxmple</h1>
//       <Login/>
//       <Profile/>
//     </UserContextProvider>
//   )
// }


// project_2:

import React, { useEffect, useState } from "react";
import './App.css'
import { ThemeProvider } from "./Context_2/theme";
import Card from "./Components_2/Card"
import ThemeBtn from "./Components_2/ThemeBtn";

export default function App()
{
  const [themeMode, setThemeMode] = useState("light")

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
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn></ThemeBtn>
            </div>

            <div className="w-full max-w-sm mx-auto">
                <Card></Card>
            </div>
        </div>
      </div>

    </ThemeProvider>
  )
}