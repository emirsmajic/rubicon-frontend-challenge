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

export default function SearchedTvShows({ searchTerm, type }) {
  const { isLoading, error, isError, data } = useSearch({ searchTerm, type })

  if (isLoading) return <Loader />
  if (isError) return <p>Error: {error.message}</p>

  return (
    <CardsContainer>
      {data.map((tvShow) => (
        <Card key={tvShow.id}>
          <CardImageContainer>
            {tvShow.poster_path ? (
              <CardImage
                src={`https://image.tmdb.org/t/p/w154${tvShow.poster_path}
  `}
                alt={tvShow.name || tvShow.original_name}
              />
            ) : (
              <CardImagePlaceholder />
            )}
          </CardImageContainer>
          <CardTitle>
            <Link to={`/tv-show/${tvShow.id}`}>
              {tvShow.name || tvShow.original_name}
            </Link>
          </CardTitle>
        </Card>
      ))}
    </CardsContainer>
  )
}
