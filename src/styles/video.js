import styled from "styled-components"

export const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 10;

  & > div {
    min-height: 100vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const VideoCloseButton = styled.button`
  font-weight: bold;
  padding: 6px 8px;
  border-radius: var(--border-radius);
  margin-bottom: 20px;
  color: var(--text-main);
  background: var(--text-lightest);
`
