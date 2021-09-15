import styled, { css } from 'styled-components/macro'

import { ReactComponent as File } from 'ui/assets/file-text.svg'

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.black};
  max-width: 33.2rem;
  min-width: 33.2rem;
  padding: 3.2rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const LogoLink = styled.a`${({ theme }) => css`
  &:focus {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 1.2rem;
    opacity: 1;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 1.2rem;
    opacity: 1;
  }
`}`

export const Logo = styled.img`
  height: 4.4rem;
  margin-top: 1.4rem;
  width: 16.4rem;
`

export const Divider = styled.div`
  margin-bottom: 2.4rem;
  margin-top: 5.6rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
`

export const LeftLine = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 2px;
  width: 10%;
`

export const DividerText = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  letter-spacing: -0.02rem;
  line-height: 2.1rem;
  margin: 0;
`

export const RightLine = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  flex-grow: 1;
  height: 2px;
  width: 60%;
`

export const Button = styled.button`${({ theme }) => css`
  background: ${theme.colors.primary};
  border: none;
  border-radius: 0.3rem;
  color: ${theme.colors.lightBlack};
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.8rem 0;
  transition: background 0.3s ease-in-out;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  &:hover {
    background: ${theme.colors.primaryDark};
  }

  &:focus {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 1rem;
    opacity: 1;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 1rem;
    opacity: 1;
  }
`}`

export const List = styled.ul`
  list-style: none;
  margin-top: 3.2rem;
  width: 100%;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

type FileIconProps = {
  $isActive: boolean
}

export const FileIcon = styled(File) <FileIconProps>`${({ theme, $isActive }) => css`
  color: ${$isActive ? theme.colors.primary : theme.colors.gray};
  opacity: ${$isActive ? 1 : 0.65};
  position: absolute;
  transition: opacity 0.2s linear;
`}`

type FileLinkProps = {
  isActive: boolean
}

export const FileLink = styled.a<FileLinkProps>`${({ theme, isActive }) => css`
  color: ${theme.colors.gray};
  font-size: 1.6rem;
  height: 100%;
  letter-spacing: -0.02rem;
  opacity: ${isActive ? 1 : 0.65};
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  text-decoration: none;
  transition: opacity 0.2s linear;
  width: 100%;
  z-index: 2;

  display: flex;
  align-items: center;

  &:focus {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 1.2rem;
    opacity: 1;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 1.2rem;
    opacity: 1;
  }
`} `

type ListItemProps = {
  isActive: boolean
}

export const ListItem = styled.li<ListItemProps>`${({ theme, isActive }) => css`
  background: ${isActive ? theme.colors.lightBlack : theme.colors.black};
  border-radius: 0.6rem;
  min-height: 3.7rem;
  padding: 0.8rem 1rem;
  position: relative;
  transition: background 0.2s linear;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: ${theme.colors.lightBlack};

    ${RemoveButton} {
      display: flex;
    }

    ${FileIcon} {
      opacity: 1;
    }

    ${FileLink} {
      opacity: 1;
    }
  }
`}`

export const StatusContainer = styled.div`
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 1rem;
`

export const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 3;

  display: none;
  justify-content: center;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.colors.white};
    height: 1.8rem;
    width: 1.8rem;
  }
`
