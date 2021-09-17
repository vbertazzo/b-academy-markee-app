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
  background: ${theme.colors.lightBlack};
  border-radius: 3rem;
  color: ${theme.colors.white};
  font-size: 1.6rem;
  left: 50%;
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
`}`
