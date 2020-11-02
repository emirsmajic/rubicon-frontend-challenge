import { useContext } from "react"
import Header from "../components/Header"
import SearchedMovies from "../components/SearchedMovies"
import SearchedTvShows from "../components/SearchedTvShows"
import TopMovies from "../components/TopMovies"
import TopTvShows from "../components/TopTvShows"
import { SearchContext } from "../context/SearchContext"
import { TabContext } from "../context/TabContext"

export default function Homepage() {
  const { currentTab } = useContext(TabContext)
  const { searchTerm } = useContext(SearchContext)

  const isSearching = searchTerm.length > 3

  return (
    <div>
      <Header />
      {currentTab === "movies" &&
        (isSearching ? (
          <SearchedMovies searchTerm={searchTerm} type="movie" />
        ) : (
          <TopMovies />
        ))}
      {currentTab === "tvShows" &&
        (isSearching ? (
          <SearchedTvShows searchTerm={searchTerm} type="tvShow" />
        ) : (
          <TopTvShows />
        ))}
    </div>
  )
}
