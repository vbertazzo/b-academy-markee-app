import { RefObject } from 'react'
import * as S from './header-styles'

type HeaderProps = {
  inputRef: RefObject<HTMLInputElement>
}

export function Header ({ inputRef }: HeaderProps) {
  return (
    <S.Container>
      <S.FileIcon aria-hidden='true' focusable='false' />
      <S.FilenameInput
        aria-label='File name'
        id='filename'
        type='text'
        name='filename'
        defaultValue='New file'
        ref={inputRef}
      />
    </S.Container>
  )
}
