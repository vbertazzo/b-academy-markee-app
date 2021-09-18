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
    forPhoneOnly: customMediaQuery('599px'),
    forTabletPortraitUp: customMediaQuery('600px'),
    forTabledLandscapeUp: customMediaQuery('900px'),
    forDesktopUp: customMediaQuery('1200px'),
    forBigDesktopUp: customMediaQuery('1800px'),
  },
}
