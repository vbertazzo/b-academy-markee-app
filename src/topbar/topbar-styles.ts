import styled, { css } from 'styled-components/macro'

export const Aside = styled.aside`${({ theme }) => css`
  background: ${theme.colors.black};
  grid-area: topbar;
  max-height: 5rem;
  max-width: 100%;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  ${theme.breakpoints.forDesktopUp} {
    display: none;
  }
`}`

export const H2 = styled.h2`${({ theme }) => css`
  color: ${theme.colors.white};
  overflow: hidden;
  max-width: calc(100vw - 22rem);
  text-overflow: ellipsis;
  white-space: nowrap;
`}`

export const Button = styled.button`${({ theme }) => css`
  background: ${theme.colors.primary};
  border: none;
  border-radius: 0.3rem;
  color: ${theme.colors.lightBlack};
  font-size: 1.6rem;
  font-weight: 700;
  min-width: 8rem;
  text-transform: capitalize;
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
