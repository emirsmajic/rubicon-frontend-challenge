import Axios from "axios"
import { useQuery } from "react-query"
import { useAsyncDebounce } from "../utils"

function getMovieUrl(searchTerm) {
  return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchTerm}&page=1&include_adult=false&region=US`
}

function getTvShowUrl(searchTerm) {
  return `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${searchTerm}&include_adult=false`
}

async function search({ type, searchTerm }) {
  if (type === "movie") {
    const { data } = await Axios.get(getMovieUrl(searchTerm))
    return data.results
  }
  if (type === "tvShow") {
    const { data } = await Axios.get(getTvShowUrl(searchTerm))
    return data.results
  }
}

export default function useSearch({ type, searchTerm }) {
  const { data, isLoading, isError, error } = useQuery(
    [{ type, searchTerm }, "search"],
    useAsyncDebounce(search, 1000)
  )

  return {
    data,
    isLoading,
    isError,
    error,
  }
}
