import { Header } from './header'

import * as S from './content-styles'

export function Content () {
  return (
    <S.Main>
      <Header />
      {/* <S.SplitPane>
        <Editor />
        <S.Divider />
        <Preview />
      </S.SplitPane> */}
    </S.Main>
  )
}
