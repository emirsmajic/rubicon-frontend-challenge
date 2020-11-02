import { createContext, useState } from "react"

export const SearchContext = createContext()

export function SearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  )
}
