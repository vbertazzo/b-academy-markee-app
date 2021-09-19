import styled, { css } from 'styled-components/macro'

export const Main = styled.main`${({ theme }) => css`
  background: ${({ theme }) => theme.colors.white};
  grid-area: main;
  height: 100%;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${theme.breakpoints.forDesktopUp} {
    background: ${({ theme }) => theme.colors.white};
    height: 100%;
    width: 100%;

    display: flex;
    gap: 4rem;
  }
`}`

export const SplitPane = styled.div`${({ theme }) => css`
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 4rem;

  ${theme.breakpoints.forDesktopUp} {
    height: 90%;
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 4rem;
  }
`}`

export const Divider = styled.div`${({ theme }) => css`
  display: none;

  ${theme.breakpoints.forDesktopUp} {
    background: ${theme.colors.black};
    display: block;
    height: 90%;
    opacity: 0.2;
    width: 2px;
  }
`}`

export const Editor = styled.div`${({ theme }) => css`
  border: solid 1px ${theme.colors.gray};
  width: 100%;

  ${theme.breakpoints.forDesktopUp} {
    border: none;
    display: block;
    height: 100%;
    width: 100%;
  }
`}`

export const ContentInput = styled.textarea`${({ theme }) => css`
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  font-family: 'Inconsolata', monospace;
  font-size: clamp(1.6rem, 5vw, 1.8rem);
  min-height: 40rem;
  outline: none;
  padding: 1rem;
  resize: none;
  transition: all 0.3s linear;
  width: 100%;

  &:focus {
    border-left: solid 4px ${theme.colors.primary};
    outline: none;
    padding-left: 2rem;
  }

  ${theme.breakpoints.forDesktopUp} {
    border: none;
    height: 100%;
  }
`}`

export const PreviewWrapper = styled.div`${({ theme }) => css`
  ${theme.breakpoints.forDesktopUp} {
    height: 100%;
    overflow-y: hidden;
    width: 100%;
  }
`}`

export const Preview = styled.article`${({ theme }) => css`
  background: ${theme.colors.white};
  color: ${theme.colors.black};
  font-size: clamp(1.6rem, 5vw, 1.8rem);
  line-height: 3rem;
  min-height: 100%;
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

  ${theme.breakpoints.forDesktopUp} {
    height: 100%;
    overflow-y: auto;
    padding: 0 0.3rem;
  }
`}`
