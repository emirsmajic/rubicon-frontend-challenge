import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const themeInStorage = localStorage.getItem("theme")

    if (themeInStorage) return themeInStorage
    else return "light"
  })

  useEffect(() => {
    localStorage.setItem("theme", theme)

    if (theme === "dark") {
      document.body.classList.remove("light")
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
      document.body.classList.add("light")
    }
  }, [theme])

  function toggle() {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}
