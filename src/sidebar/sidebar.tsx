import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import { StatusIcon } from './status-icon'
import { ReactComponent as PlusIcon } from 'ui/assets/plus.svg'
import { ReactComponent as RemoveIcon } from 'ui/assets/close.svg'
import logo from './logo.png'

import * as S from './sidebar-styles'

export type Status = 'editing' | 'saving' | 'saved'

export type File = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}

export function Sidebar () {
  const [files, setFiles] = useState<File[]>([])

  const handleCreateFile = () => {
    setFiles(prevState => prevState
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuid(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  return (
    <S.Sidebar>
      <header>
        <S.LogoLink href='/'>
          <S.Logo src={logo} alt='Markee. home' />
        </S.LogoLink>
      </header>

      <S.Divider>
        <S.LeftLine />
        <S.DividerText>Files</S.DividerText>
        <S.RightLine />
      </S.Divider>

      <S.Button onClick={handleCreateFile}>
        <PlusIcon aria-hidden='true' focusable='false' />
        <span>Add file</span>
      </S.Button>

      <S.List>
        {files?.map(file => (
          <S.ListItem key={file.id} isActive={file.active}>
            <S.FileIcon $isActive={file.active} />
            <S.FileLink href={`/file/${file.id}`} isActive={file.active}>
              {file.name}
            </S.FileLink>
            <S.StatusContainer>
              {file.active && <StatusIcon status={file.status} />}

              {!file.active && (
                <S.RemoveButton title={`Remove ${file.name}`} aria-labelledby='button-label'>
                  <span id='button-label' hidden>Remove</span>
                  <RemoveIcon aria-hidden='true' focusable='false' />
                </S.RemoveButton>
              )}
            </S.StatusContainer>
          </S.ListItem>
        ))}
      </S.List>
    </S.Sidebar>
  )
}
