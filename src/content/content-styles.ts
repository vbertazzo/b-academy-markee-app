import styled, { css } from 'styled-components/macro'

export const Main = styled.main`${({ theme }) => css`
  background: ${theme.colors.white};
  height: 100%;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    gap: 4rem;
  }
`}`

export const SplitPane = styled.article`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.forTabletLandscapeUp}) {
    height: 95%;
    flex-direction: row;
  }
`

export const Divider = styled.div`${({ theme }) => css`
  background: ${theme.colors.black};
  display: none;
  height: 90%;
  opacity: 0.2;
  width: 2px;

  @media (min-width: ${theme.breakpoints.forTabletLandscapeUp}) {
    display: block;
  }
`}`

export const Editor = styled.div`${({ theme }) => css`
  border: solid 1px ${theme.colors.gray};
  height: 50%;
  min-height: 16rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.forTabletLandscapeUp}) {
    border: none;
    height: 100%;
  }
`}`

export const ContentInput = styled.textarea`${({ theme }) => css`
  background: ${theme.colors.white};
  border: none;
  border-left: solid 0px ${theme.colors.primary};
  color: ${theme.colors.black};
  font-family: 'Inconsolata', monospace;
  font-size: 1.8rem;
  height: 100%;
  outline: none;
  resize: none;
  transition: all 0.3s linear;
  width: 100%;

  &:focus {
    border-left: solid 4px ${theme.colors.primary};
    outline: none;
    padding-left: 2rem;
  }
`}`

export const PreviewWrapper = styled.div`
  height: 50%;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.forTabletLandscapeUp}) {
    height: 100%;
  }
`

export const Preview = styled.article`${({ theme }) => css`
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  font-size: 1.8rem;
  height: 100%;
  line-height: 3rem;
  overflow-y: auto;
  padding: 0 0.3rem;
  width: 100%;

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }

  a:focus {
    outline: solid 2px ${theme.colors.black};
  }

  a:focus:not(:focus-visible) {
    outline: none;
  }

  a:focus-visible {
    outline: solid 2px ${theme.colors.black};
  }
`}`
