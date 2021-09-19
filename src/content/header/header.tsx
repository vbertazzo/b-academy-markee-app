import { ChangeEvent, RefObject } from 'react'
import * as S from './header-styles'

type HeaderProps = {
  inputRef: RefObject<HTMLInputElement>
  selectedFileName: string
  onUpdate: ({ type, value }: Record<string, string>) => void
  onCopy: () => void
}

export function Header ({
  inputRef,
  selectedFileName,
  onUpdate,
  onCopy,
}: HeaderProps) {
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    onUpdate({ type: 'name', value: e.target.value })
  }

  return (
    <S.Container>
      <S.FileWrapper>
        <S.FileIcon aria-hidden='true' focusable='false' />

        <S.FilenameInput
          aria-label='File name'
          autoFocus
          onChange={handleNameChange}
          ref={inputRef}
          type='text'
          value={selectedFileName}
        />
      </S.FileWrapper>

      <S.CopyButton onClick={onCopy}>
        <S.CopyIcon aria-hidden='true' focusable='false' />
        <span>Copy to clipboard</span>
      </S.CopyButton>
    </S.Container>
  )
}
