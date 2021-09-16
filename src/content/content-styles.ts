import styled, { css } from 'styled-components/macro'

export const Main = styled.main`
  background: ${({ theme }) => theme.colors.white};
  height: 100%;
  padding: 2.4rem;
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const SplitPane = styled.article`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
`

export const Divider = styled.div`
  background: ${({ theme }) => theme.colors.black};
  height: 90%;
  opacity: 0.2;
  width: 2px;
`

export const Editor = styled.div`
  height: 100%;
  padding: 4rem 3.2rem 4rem 0;
  width: 100%;
`

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
  height: 100%;
  overflow-y: hidden;
  padding: 4rem 1.2rem 4rem 3.2rem;
  width: 100%;
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
