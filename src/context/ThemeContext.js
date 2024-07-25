"use client"
import { createContext, useState, useEffect } from "react"
import Cookies from "js-cookie"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light")

  useEffect(() => {
    const savedTheme = Cookies.get('theme')
    if (savedTheme) {
      setMode(savedTheme)
    }
  }, [])

  const toggle = () => {
    setMode((prev) => {
      const newMode = prev === "dark" ? "light" : "dark"
      Cookies.set('theme', newMode, { expires: 365 })
      return newMode
    })
  }

  useEffect(() => {
    Cookies.set('theme', mode, { expires: 365 })
  }, [mode])

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
