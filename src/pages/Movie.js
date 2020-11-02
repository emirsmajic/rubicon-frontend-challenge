import { Link, useParams } from "react-router-dom"
import Loader from "../components/Loader"
import ThemeToggleButton from "../components/ThemeToggleButton"
import useDetails from "../hooks/useDetails"
import {
  BannerContainer,
  BannerImage,
  BannerImagePlaceholder,
  DetailsOverview,
  DetailsTitle,
} from "../styles/cards"
import { TabsContainer } from "../styles/header"

export default function Movie() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useDetails({ type: "movie", id })

  return (
    <div>
      <TabsContainer>
        <Link to="/">&larr; Back to homepage</Link>
        <ThemeToggleButton />
      </TabsContainer>
      {isLoading && <Loader />}
      {isError && <p>Error: {error.message}</p>}
      {data && (
        <>
          <BannerContainer>
            {data.backdrop_path ? (
              <BannerImage
                src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
              />
            ) : (
              <BannerImagePlaceholder />
            )}
          </BannerContainer>
          <DetailsTitle>{data.title || data.original_title}</DetailsTitle>
          <DetailsOverview>{data.overview}</DetailsOverview>
        </>
      )}
    </div>
  )
}
