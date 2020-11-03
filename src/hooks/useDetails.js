import Axios from "axios"
import { useQuery } from "react-query"

function getMovieUrl(id) {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}

function getMovieVideosUrl(id) {
  return `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US
  `
}

function getTvShowVideosUrl(id) {
  return `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US
  `
}

function getTvShowUrl(id) {
  return `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
}

async function getDetails({ type, id }) {
  if (type === "movie") {
    const { data: movieDetails } = await Axios.get(getMovieUrl(id))
    const { data: movieVideoData } = await Axios.get(getMovieVideosUrl(id))
    const movieVideos = { ...movieVideoData }
    return { ...movieDetails, videos: movieVideos.results }
  }
  if (type === "tvShow") {
    const { data: tvShowDetails } = await Axios.get(getTvShowUrl(id))
    const { data: tvShowVideoData } = await Axios.get(getTvShowVideosUrl(id))
    const tvShowVideos = { ...tvShowVideoData }
    return { ...tvShowDetails, videos: tvShowVideos.results }
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
