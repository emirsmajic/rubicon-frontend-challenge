import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import useMovies from "../hooks/useMovies"
import {
  Card,
  CardImage,
  CardImageContainer,
  CardsContainer,
  CardTitle,
} from "../styles/cards"

export default function TopTvShows() {
  const { isLoading, error, isError, data } = useMovies()

  if (isLoading) return <Loader />
  if (isError) return <p>Error: {error.message}</p>

  return (
    <CardsContainer>
      {data.map((movie) => (
        <Card key={movie.id}>
          <CardImageContainer>
            <CardImage
              src={`https://image.tmdb.org/t/p/w154${movie.poster_path}
`}
              alt={movie.title || movie.original_title}
            />
          </CardImageContainer>
          <CardTitle>
            <Link to={`/movie/${movie.id}`}>
              {movie.title || movie.original_title}
            </Link>
          </CardTitle>
        </Card>
      ))}
    </CardsContainer>
  )
}
