import { MouseEvent } from 'react'
import { File } from 'resources/files/types'

import { StatusIcon } from './status-icon'
import { Close as RemoveIcon, Plus as PlusIcon } from 'ui/icons'
import logo from './logo.png'

import * as S from './sidebar-styles'

type SidebarProps = {
  files: File[]
  onCreateFile: () => void
  onSelectFile: (id: string) => (e: MouseEvent) => void
  onRemoveFile: (id: string) => void
}

export function Sidebar ({
  files,
  onCreateFile,
  onSelectFile,
  onRemoveFile,
}: SidebarProps) {
  return (
    <S.Sidebar>
      <header>
        <S.VisuallyHiddenH1>
          Markee - Markdown Editor
        </S.VisuallyHiddenH1>
        <S.LogoLink href='/'>
          <S.Logo src={logo} alt='Markee. home' />
        </S.LogoLink>
      </header>

      <S.H2>
        <span>Files</span>
      </S.H2>

      <S.AddButton onClick={onCreateFile}>
        <PlusIcon aria-hidden='true' focusable='false' />
        Add file
      </S.AddButton>

      <S.List>
        {files?.map(file => (
          <S.ListItem key={file.id} isActive={file.active}>
            <S.FileIcon $isActive={file.active} />

            <S.FileLink
              href={`/file/${file.id}`}
              isActive={file.active}
              onClick={onSelectFile(file.id)}
            >
              {file.name}
            </S.FileLink>

            <S.StatusContainer>
              {file.active && <StatusIcon status={file.status} />}

              {!file.active && (
                <S.RemoveButton
                  title={`Remove ${file.name}`}
                  aria-labelledby='button-label'
                  onClick={() => onRemoveFile(file.id)}
                >
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
