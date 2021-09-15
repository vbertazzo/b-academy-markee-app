import styled, { css } from 'styled-components/macro'
import { ReactComponent as File } from 'ui/assets/file-text.svg'

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
