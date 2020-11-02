import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"
import { TabContext } from "../context/TabContext"
import { SearchInput, Switch, Switches, TabsContainer } from "../styles/header"
import { Divider } from "../styles/utils"
import ThemeToggleButton from "./ThemeToggleButton"

export default function Header() {
  const { currentTab, setCurrentTab } = useContext(TabContext)
  const { searchTerm, setSearchTerm } = useContext(SearchContext)

  function handleInputChange(e) {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <TabsContainer>
        <Switches>
          <Switch
            isCurrent={currentTab === "movies"}
            onClick={(e) => setCurrentTab("movies")}
          >
            Movies
          </Switch>
          <Switch
            isCurrent={currentTab === "tvShows"}
            onClick={(e) => setCurrentTab("tvShows")}
          >
            TV Shows
          </Switch>
        </Switches>
        <ThemeToggleButton />
      </TabsContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={`Search for a ${
          currentTab === "movies" ? "movie" : "tv show"
        } ...`}
      />
      <Divider />
    </>
  )
}
