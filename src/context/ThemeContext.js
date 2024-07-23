"use client"
import { createContext, useState } from "react"
// import { setCookie, getCookie } from 'cookies-next'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // const lasttheme = getCookie('theme')
  // const [mode, setMode] = useState(lasttheme)
  const [mode, setMode] = useState("light")

  // setCookie('theme', mode)

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"))
    // setCookie('theme', mode)
  }

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
