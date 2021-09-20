import styled, { css, keyframes } from 'styled-components/macro'
import { DefaultButton } from 'ui/default-button'
import { ReactComponent as File } from 'ui/assets/file-text.svg'
import { ReactComponent as Copy } from 'ui/assets/copy.svg'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
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

  a:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
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

export const CopyButton = styled(DefaultButton)`${({ theme }) => css`
  background: transparent;
  color: ${theme.colors.black};
  font-size: 1.6rem;
  transition: color 0.3s ease;

  &:focus {
    outline: solid 2px ${theme.colors.primaryDark};
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primaryDark};
  }

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    width: auto;

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
  }
`}`

export const CopyIcon = styled(Copy)`
  color: #1d293b;
  margin-right: 0.5rem;
  opacity: 0.7;
  stroke-dasharray: 400;
`
