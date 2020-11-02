import Axios from "axios"
import { useQuery } from "react-query"

function getMovieUrl(id) {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}

function getTvShowUrl(id) {
  return `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}

async function getDetails({ type, id }) {
  if (type === "movie") {
    const { data } = await Axios.get(getMovieUrl(id))
    return data
  }
  if (type === "tvShow") {
    const { data } = await Axios.get(getTvShowUrl(id))
    return data
  }
}

export default function useDetails({ type, id }) {
  const { data, isLoading, isError, error } = useQuery(
    [{ type, id }, "details"],
    getDetails
  )

  return {
    data,
    isLoading,
    isError,
    error,
  }
}
