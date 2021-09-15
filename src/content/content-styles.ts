import styled from 'styled-components/macro'

export const Main = styled.main`
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
`
