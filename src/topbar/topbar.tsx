import * as S from './topbar-styles'

type TopbarProps = {
  isEditorMode: boolean
  onDisplayModeChange: () => void
  onShowSidebar: () => void
  selectedFileName: string | undefined
}

export function Topbar ({
  isEditorMode,
  onDisplayModeChange,
  onShowSidebar,
  selectedFileName,
}: TopbarProps) {
  return (
    <S.Aside>
      <S.Button onClick={onShowSidebar}>
        Menu
      </S.Button>

      {!!selectedFileName && (
        <header>
          <S.H2>{selectedFileName}</S.H2>
        </header>
      )}

      <S.Button
        onClick={() => onDisplayModeChange()}
      >{isEditorMode ? 'Preview' : 'Editor'}
      </S.Button>
    </S.Aside>
  )
}
