import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Loader from "../components/Loader"
import ThemeToggleButton from "../components/ThemeToggleButton"
import VideoModal from "../components/VideoModal"
import useDetails from "../hooks/useDetails"
import {
  BannerContainer,
  BannerImage,
  BannerImagePlaceholder,
  DetailsOverview,
  DetailsTitle,
} from "../styles/cards"
import { TabsContainer } from "../styles/header"
import { PlayButton } from "../styles/utils"

export default function TvShow() {
  const { id } = useParams()
  const { data, isLoading, isError, error } = useDetails({ type: "tvShow", id })
  const [modalOpen, setModalOpen] = useState(false)

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
          <DetailsTitle>
            {data.name || data.original_name}{" "}
            {data.videos[0] && (
              <PlayButton onClick={(e) => setModalOpen(true)}>
                &#9658; Play trailer
              </PlayButton>
            )}
          </DetailsTitle>
          <DetailsOverview>{data.overview}</DetailsOverview>
          {modalOpen && (
            <VideoModal src={data.videos[0].key} setModalOpen={setModalOpen} />
          )}
        </>
      )}
    </div>
  )
}
