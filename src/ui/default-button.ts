import styled, { css } from 'styled-components/macro'

export const DefaultButton = styled.button`${({ theme }) => css`
border: none;
border-radius: 0.3rem;
color: ${theme.colors.lightBlack};
font-size: 1.4rem;
transition: background 0.3s ease-in-out;

display: flex;
align-items: center;
justify-content: center;
gap: 1.2rem;

&:focus {
  outline: solid 2px ${theme.colors.primary};
  outline-offset: 1rem;
}

&:focus:not(:focus-visible) {
  outline: none;
}

&:focus-visible {
  outline: solid 2px ${theme.colors.primary};
  outline-offset: 1rem;
}

@media (min-width: ${({ theme }) => theme.breakpoints.forTabletLandscapeUp}) {
  cursor: pointer;
  width: 100%;
}
`}`
