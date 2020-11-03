import { SiteContainer } from "../styles/utils"
import { VideoCloseButton, VideoContainer } from "../styles/video"

export default function VideoModal({ src, setModalOpen }) {
  return (
    <VideoContainer>
      <SiteContainer>
        <VideoCloseButton onClick={(e) => setModalOpen(false)}>
          Close
        </VideoCloseButton>
        <iframe
          width="100%"
          height="480"
          title={src}
          src={`https://www.youtube.com/embed/${src}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
          autoPlay
        ></iframe>
      </SiteContainer>
    </VideoContainer>
  )
}
