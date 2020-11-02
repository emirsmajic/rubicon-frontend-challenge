import styled from "styled-components"

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding-bottom: 40px;
`

export const Card = styled.div`
  justify-self: center;
  width: 150px;
`

export const CardImageContainer = styled.div`
  box-shadow: var(--box-shadow-small);
  border-radius: var(--border-radius);
  height: 250px;
  background: var(--text-lightest);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`

export const CardImage = styled.img`
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: var(--border-radius);
`

export const CardImagePlaceholder = styled.div`
  min-height: 100%;
  background: linear-gradient(to right, steelblue, skyblue);
  border-radius: var(--border-radius);
`

export const CardTitle = styled.h4`
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  &:hover {
    text-decoration: underline;
  }
`

export const BannerContainer = styled.div`
  box-shadow: var(--box-shadow-small);
  border-radius: var(--border-radius-large);
  height: 500px;
  background: var(--text-lightest);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: var(--border-radius-large);
`

export const BannerImagePlaceholder = styled.div`
  min-height: 100%;
  background: linear-gradient(to right, steelblue, skyblue);
  border-radius: var(--border-radius-large);
`

export const DetailsTitle = styled.h1`
  font-size: 48px;
  margin-top: 20px;
`

export const DetailsOverview = styled.p`
  color: var(--text-light);
  font-size: 18px;
  margin-top: 6px;
`
