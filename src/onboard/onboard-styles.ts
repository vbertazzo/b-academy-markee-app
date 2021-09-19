import styled, { css } from 'styled-components/macro'

import { ReactComponent as Writing } from './illustration.svg'

export const Main = styled.main`${({ theme }) => css`
  height: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    padding: 4rem;

    justify-content: center;
    flex-direction: row;
    gap: clamp(10rem, 8vw, 16rem);
  }
`}`

export const MessageSection = styled.section`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4rem;
  max-width: 30rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

export const Illustration = styled(Writing)`${({ theme }) => css`
  width: 100%;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    height: 54rem;
    width: min(54rem, 100%);
  }
`}`

export const Button = styled.button`${({ theme }) => css`
  background: ${theme.colors.lightBlack};
  border: none;
  border-radius: 0.3rem;
  color: ${theme.colors.white};
  font-size: 1.6rem;
  padding: 1.4rem 0;
  transition: background 0.3s ease-in-out;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.2rem;
  justify-content: center;

  svg path {
    stroke: ${theme.colors.white}
  }

  &:focus {
    outline: solid 2px ${theme.colors.lightBlack};
    outline-offset: 1rem;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.lightBlack};
    outline-offset: 1rem;
  }

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    cursor: pointer;

    &:hover {
      background: ${theme.colors.primaryDark};
    }
  }
`}`
