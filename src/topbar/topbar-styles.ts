import styled, { css } from 'styled-components/macro'

export const Aside = styled.aside`${({ theme }) => css`
  grid-area: topbar;
  max-height: 5rem;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${theme.breakpoints.forDesktopUp} {
    display: none;
  }
`}`

export const Button = styled.button`${({ theme }) => css`
  background: ${theme.colors.white};
  border: solid 1px ${theme.colors.lightBlack};
  border-radius: 0.3rem;
  color: ${theme.colors.lightBlack};
  font-size: 1.6rem;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 0.5rem;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 0.5rem;
  }
`}`
