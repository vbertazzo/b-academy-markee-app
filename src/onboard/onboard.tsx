import { ReactComponent as AddIcon } from 'ui/assets/plus.svg'

import * as S from './onboard-styles'

type OnboardProps = {
  onCreateFile: () => void
}

export function Onboard ({ onCreateFile }: OnboardProps) {
  return (
    <S.Main>
      <S.MessageSection>
        <h2>Add a new file to start.</h2>
        <S.Button onClick={onCreateFile}>
          <AddIcon aria-hidden='true' focusable='false' />
          <span>Add file</span>
        </S.Button>
      </S.MessageSection>
      <S.Illustration aria-hidden='true' focusable='false' />
    </S.Main>
  )
}
