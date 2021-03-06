import styled, { css, keyframes } from 'styled-components/macro'

const slideAndFade = keyframes`
  0% {
    transform: translateY(-150%);
    opacity: 0.25;
  }
  30% {
    transform: translateY(0%);
    opacity: 1;
  }
  70% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-150%);
    opacity: 0.25;
  }
`

export const Toast = styled.div`${({ theme }) => css`
  animation: ${slideAndFade} 6s both cubic-bezier(0.645, 0.045, 0.355, 1);
  background: ${theme.colors.white};
  border-radius: 3rem;
  color: ${theme.colors.black};
  font-size: 1.6rem;
  right: 3rem;
  padding: 2rem 3rem;
  position: fixed;
  top: 2rem;
  width: max-content;

  display: flex;
  justify-content: center;

  @media (prefers-reduced-motion: reduce) {
    & {
      animation: none;
    }
  }

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    background: ${theme.colors.lightBlack};
    color: ${theme.colors.white};
  }
`}`
