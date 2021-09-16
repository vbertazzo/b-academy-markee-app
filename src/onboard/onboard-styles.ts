import styled, { css } from 'styled-components/macro'

import { ReactComponent as Writing } from './illustration.svg'

export const Wrapper = styled.section`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 16rem;
  justify-content: center;
`

export const MessageContainer = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1.4rem;
  width: 30rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`

export const Illustration = styled(Writing)`
  height: 54rem;
  width: 54rem;
`

export const Button = styled.button`${({ theme }) => css`
  background: ${theme.colors.lightBlack};
  border: none;
  border-radius: 0.3rem;
  color: ${theme.colors.white};
  cursor: pointer;
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

  &:hover {
    background: ${theme.colors.primaryDark};
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
`}`
