import { createContext, useState } from "react"

export const TabContext = createContext()

export function TabContextProvider({ children }) {
  const [currentTab, setCurrentTab] = useState("tvShows")

  return (
    <TabContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </TabContext.Provider>
  )
}
