import { Header } from './header'

import * as S from './content-styles'

export function Content () {
  return (
    <S.Main>
      <Header />
      <S.SplitPane>
        <S.Editor>
          <S.ContentInput placeholder='Your markdown here' />
        </S.Editor>
        <S.Divider />
        <S.Preview>
          <h2>Bootcamp Brainn Co.</h2>
          <p>Lorem ipsum dolor sit amet simet</p>
        </S.Preview>
      </S.SplitPane>
    </S.Main>
  )
}
