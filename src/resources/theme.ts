const customMediaQuery = (minWidth: string) =>
  `@media (min-width: ${minWidth})`

export const theme = {
  colors: {
    black: '#1E293B',
    lightBlack: '#293445',
    gray: '#E4E5E7',
    white: '#FAFAFA',
    primary: '#1FC8E1',
    primaryDark: '#18A1B5',
  },
  breakpoints: {
    forDesktopUp: customMediaQuery('1200px'),
  },
}
