import { ChangeEvent, RefObject } from 'react'
import * as S from './header-styles'

type HeaderProps = {
  inputRef: RefObject<HTMLInputElement>
  selectedFileName: string
  onUpdate: ({ type, value }: Record<string, string>) => void
}

export function Header ({ inputRef, selectedFileName, onUpdate }: HeaderProps) {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdate({ type: 'name', value: e.target.value })
  }

  return (
    <S.Container>
      <S.FileIcon aria-hidden='true' focusable='false' />
      <S.FilenameInput
        aria-label='File name'
        onChange={handleNameChange}
        ref={inputRef}
        type='text'
        value={selectedFileName}
      />
    </S.Container>
  )
}
