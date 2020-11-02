import { Link } from "react-router-dom"
import useTvShows from "../hooks/useTvShows"
import {
  Card,
  CardImage,
  CardImageContainer,
  CardsContainer,
  CardTitle,
} from "../styles/cards"
import Loader from "./Loader"

export default function TopTvShows() {
  const { isLoading, error, isError, data } = useTvShows()

  if (isLoading) return <Loader />
  if (isError) return <p>Error: {error.message}</p>

  return (
    <CardsContainer>
      {data.map((tvShow) => (
        <Card key={tvShow.id}>
          <CardImageContainer>
            <CardImage
              src={`https://image.tmdb.org/t/p/w154${tvShow.poster_path}
`}
              alt={tvShow.name || tvShow.original_name}
            />
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
