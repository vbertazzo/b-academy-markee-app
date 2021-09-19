import * as S from './topbar-styles'

type TopbarProps = {
  onShowSidebar: () => void
  selectedFileName: string | undefined
}

export function Topbar ({
  onShowSidebar,
  selectedFileName,
}: TopbarProps) {
  return (
    <S.Aside>
      <S.Button onClick={onShowSidebar}>
        Menu
      </S.Button>

      {!!selectedFileName && (
        <S.Header>
          <S.H2>{selectedFileName}</S.H2>
        </S.Header>
      )}
    </S.Aside>
  )
}
