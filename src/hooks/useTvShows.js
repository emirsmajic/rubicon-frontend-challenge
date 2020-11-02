import Axios from "axios"
import { useQuery } from "react-query"

const TOP_TV_SHOWS_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&vote_average.gte=8.0&vote_count.gte=1000&include_null_first_air_dates=false`

async function getTopTenTvShows() {
  const { data } = await Axios.get(TOP_TV_SHOWS_URL)
  const tvShows =
    data.results.length > 10 ? data.results.slice(0, 10) : data.results
  return tvShows
}

export default function useMovies() {
  const { isLoading, isError, error, data } = useQuery(
    "tv-shows",
    getTopTenTvShows
  )

  return {
    isLoading,
    isError,
    error,
    data,
  }
}
