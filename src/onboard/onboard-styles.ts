import styled, { css } from 'styled-components/macro'
import { DefaultButton } from 'ui/default-button'

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
    width: 100%;
    padding: 4rem;

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

export const Button = styled(DefaultButton)`${({ theme }) => css`
  background: ${theme.colors.lightBlack};
  color: ${theme.colors.white};
  font-size: 1.6rem;
  padding: 1.4rem 0;
  width: 100%;

  svg path {
    stroke: ${theme.colors.white}
  }

  &:focus {
    outline: solid 2px ${theme.colors.primaryDark};
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primaryDark};
  }

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    &:hover {
      background: ${theme.colors.primaryDark};
    }
  }
`}`
