import styled, { css, keyframes } from 'styled-components/macro'
import { ReactComponent as File } from 'ui/assets/file-text.svg'
import { ReactComponent as Copy } from 'ui/assets/copy.svg'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.2rem
`

export const FileIcon = styled(File)`
  color: ${({ theme }) => theme.colors.primary};
`

export const FilenameInput = styled.input`${({ theme }) => css`
  background: none;
  border: none;
  border-left: solid 0px ${theme.colors.primary};
  color: ${theme.colors.black};
  flex-grow: 1;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 0.5rem;
  transition: all 0.3s linear;

  &:focus {
    border-left: solid 4px ${theme.colors.primary};
    outline: none;
    padding-left: 1.2rem;
  }
`}`

const dash = keyframes`
  to {
    stroke-dashoffset: 400;
  }
`

export const CopyButton = styled.button`${({ theme }) => css`
  background: transparent;
  border: none;
  color: ${theme.colors.black};
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 400;
  transition: color 0.3s ease;

  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;

  &:hover {
    color: ${theme.colors.primaryDark};

    svg {
      animation: ${dash} 1.5s reverse;
      color: ${theme.colors.primaryDark};
    }

    @media (prefers-reduced-motion: reduce) {
      svg {
        animation: none;
      }
    }
  }

  &:focus {
    outline: solid 2px ${theme.colors.primaryDark};
    outline-offset: 1rem;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primaryDark};
    outline-offset: 1rem;
  }
`}`

export const CopyIcon = styled(Copy)`
  color: #1d293b;
  margin-right: 0.5rem;
  opacity: 0.7;
  stroke-dasharray: 400;
`
