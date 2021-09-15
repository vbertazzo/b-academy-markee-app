import * as S from './header-styles'

export function Header () {
  return (
    <S.Container>
      <S.FileIcon aria-hidden='true' focusable='false' />
      <S.FilenameInput
        aria-label='File name'
        id='filename'
        type='text'
        name='filename'
        defaultValue='New file'
      />
    </S.Container>
  )
}
