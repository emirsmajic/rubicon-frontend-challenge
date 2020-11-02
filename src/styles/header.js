import styled from "styled-components"

export const TabsContainer = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Switches = styled.div`
  padding: 5px;
  border-radius: var(--border-radius);
  background: var(--main-color-lightest);
`

export const Switch = styled.button`
  padding: 4px 8px;
  font-weight: bold;
  background: ${({ isCurrent }) =>
    isCurrent ? "var(--main-color)" : "transparent"};
  color: ${({ isCurrent }) => (isCurrent ? "#fff" : "var(--main-color-light)")};
  border-radius: var(--border-radius-small);

  &:nth-of-type(1) {
    margin-right: 8px;
  }
`

export const ThemeToggle = styled.button`
  font-weight: bold;
  color: var(--text-main);
  padding: 4px 8px;
  border-radius: var(--border-radius);
  background: var(--text-lightest);
`

export const SearchInput = styled.input`
  display: block;
  width: 100%;
  outline: none;
  background-color: var(--text-lightest);
  color: var(--text-main);
  border: none;
  padding: 10px 20px;
  border-radius: var(--border-radius);
  font-size: 1.05rem;
  border: var(--border);

  &::placeholder {
    font-style: italic;
    color: var(--text-light);
  }
`
