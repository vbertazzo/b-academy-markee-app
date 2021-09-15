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

const files: File[] = [
  {
    id: '1',
    name: 'README.md',
    content: '## Bootcamp Brainn Co. Lorem ipsum dolor sit amet simet',
    active: false,
    status: 'editing',
  },
  {
    id: '2',
    name: 'CONTRIBUTING.md',
    content: '## Contributing',
    active: true,
    status: 'saving',
  },
  {
    id: '3',
    name: 'LICENSE.md',
    content: '## License file',
    active: false,
    status: 'saved',
  },
]

export function Sidebar () {
  return (
    <S.Sidebar>
      <header>
        <S.Logo src={logo} alt='Markee.' />
      </header>

      <S.Divider>
        <S.LeftLine />
        <S.DividerText>Files</S.DividerText>
        <S.RightLine />
      </S.Divider>

      <S.Button>
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
