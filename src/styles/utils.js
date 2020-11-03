import styled from "styled-components"

export const SiteContainer = styled.div`
  width: 95%;
  max-width: 980px;
  margin: auto;
`

export const Divider = styled.div`
  height: 1px;
  background-color: #cecece;
  margin: 1.5rem 0;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`

export const Loader = styled.div`
  width: 80px;
  height: 80px;

  &::after {
    content: " ";
    display: block;
    width: 48px;
    height: 48px;
    margin: 8px;
    border-radius: 50%;
    border: 4px solid var(--text-light);
    border-color: var(--text-light) transparent var(--text-light) transparent;
    animation: spin 1.2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const PlayButton = styled.button`
  font-weight: bold;
  padding: 6px 8px;
  border-radius: var(--border-radius);
  color: var(--text-main);
  margin-left: 12px;
  background: var(--text-lightest);
`
