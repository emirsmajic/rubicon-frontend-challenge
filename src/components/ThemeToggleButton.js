import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { ThemeToggle } from "../styles/header"

export default function ThemeToggleButton() {
  const { toggle, theme } = useContext(ThemeContext)

  return (
    <ThemeToggle onClick={toggle}>
      {theme === "light" ? "Dark mode" : "Light mode"}
    </ThemeToggle>
  )
}
