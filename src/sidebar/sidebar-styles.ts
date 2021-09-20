import styled, { css } from 'styled-components/macro'

import { DefaultButton } from 'ui/default-button'
import { FileText } from 'ui/icons'

export const Sidebar = styled.aside`${({ theme }) => css`
  background: ${({ theme }) => theme.colors.black};
  max-width: 100%;
  min-width: 32rem;
  padding: clamp(2rem, 6vw, 3rem);

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    max-width: 33.2rem;
    min-width: 33.2rem;
    padding: 3.2rem;
    gap: 2.2rem;
  }
`}`

export const VisuallyHiddenH1 = styled.h1`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
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
  width: 16.4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.forTabletLandscapeUp}) {
    margin: 1.4rem 0;
  }
`

export const H2 = styled.h2`${({ theme }) => css`
  color: ${theme.colors.white};
  font-size: 1.6rem;
  position: relative;
  padding-left: 2rem;
  width: min(32rem, 100%);

  span {
    background-color: ${theme.colors.black};
    position: relative;
    padding: 0 1rem;
  }

  &::before {
    background: ${theme.colors.primary};
    border-radius: 2px;
    content: '';
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
  }
`}`

export const AddButton = styled(DefaultButton)`${({ theme }) => css`
  background: ${theme.colors.primary};
  padding: 0.8rem 0;
  width: min(32rem, 100%);

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    &:hover {
      background: ${theme.colors.primaryDark};
    }
  }
`}`

export const List = styled.ul`
  list-style: none;
  margin: 3.2rem 0 0;
  overflow-y: auto;
  padding: 0 0 1rem;
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 0.8rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.forTabletLandscapeUp}) {
    flex-direction: column;
    padding: 0;
  }
`

type FileIconProps = {
  $isActive: boolean
}

export const FileIcon = styled(FileText) <FileIconProps>`${({ theme, $isActive }) => css`
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
  line-height: 2.1rem;
  opacity: ${isActive ? 1 : 0.65};
  overflow: hidden;
  max-width: 18rem;
  min-height: 2.08rem;
  padding-left: 4rem;
  padding-right: 3.2rem;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: opacity 0.2s linear;
  vertical-align: middle;
  width: 100%;
  white-space: nowrap;
  z-index: 2;

  &:focus {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 0.6rem;
    opacity: 1;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: solid 2px ${theme.colors.primary};
    outline-offset: 0.6rem;
    opacity: 1;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.forTabletLandscapeUp}) {
    max-width: 100%;
    white-space: normal;
  }
`} `

type ListItemProps = {
  isActive: boolean
}

export const ListItem = styled.li<ListItemProps>`${({ theme, isActive }) => css`
  background: ${isActive ? theme.colors.lightBlack : theme.colors.black};
  border-radius: 0.6rem;
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

export const RemoveButton = styled(DefaultButton)`${({ theme }) => css`
  background: transparent;
  padding: 0;
  z-index: 3;

  svg {
    color: ${theme.colors.white};
    height: 1.8rem;
    width: 1.8rem;
  }

  &:focus {
    outline-offset: 0.6rem;
  }

  &:focus-visible {
    outline-offset: 0.6rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.forTabletLandscapeUp}) {
    display: none;
    cursor: pointer;
  }
`}`
