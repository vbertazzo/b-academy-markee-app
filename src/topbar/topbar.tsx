import * as S from './topbar-styles'

type TopbarProps = {
  onShowSidebar: () => void
  selectedFileName: string | undefined
}

export function Topbar ({ onShowSidebar, selectedFileName }: TopbarProps) {
  return (
    <S.Aside>
      <S.Button onClick={onShowSidebar}>
        Menu
      </S.Button>

      {!!selectedFileName && (
        <header>
          <h2>{selectedFileName}</h2>
        </header>
      )}

      <S.Button>Preview</S.Button>
    </S.Aside>
  )
}
