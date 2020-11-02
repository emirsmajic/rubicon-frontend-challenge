import Axios from "axios"
import { useQuery } from "react-query"

const TOP_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&region=US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=1&vote_count.gte=15000&vote_average.gte=8.0`

async function getTopTenMovies() {
  const { data } = await Axios.get(TOP_MOVIES_URL)
  const movies =
    data.results.length > 10 ? data.results.slice(0, 10) : data.results
  return movies
}

export default function useMovies() {
  const { isLoading, isError, error, data } = useQuery(
    "movies",
    getTopTenMovies
  )

  return {
    isLoading,
    isError,
    error,
    data,
  }
}
