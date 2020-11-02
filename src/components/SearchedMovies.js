import { Link } from "react-router-dom"
import useSearch from "../hooks/useSearch"
import {
  Card,
  CardImage,
  CardImageContainer,
  CardImagePlaceholder,
  CardsContainer,
  CardTitle,
} from "../styles/cards"
import Loader from "./Loader"

export default function SearchedMovies({ searchTerm, type }) {
  const { isLoading, error, isError, data } = useSearch({ searchTerm, type })

  if (isLoading) return <Loader />
  if (isError) return <p>Error: {error.message}</p>

  return (
    <CardsContainer>
      {data.map((movie) => (
        <Card key={movie.id}>
          <CardImageContainer>
            {movie.poster_path ? (
              <CardImage
                src={`https://image.tmdb.org/t/p/w154${movie.poster_path}
  `}
                alt={movie.title || movie.original_title}
              />
            ) : (
              <CardImagePlaceholder />
            )}
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
