import { ReactComponent as AddIcon } from 'ui/assets/plus.svg'

import * as S from './onboard-styles'

type OnboardProps = {
  onCreateFile: () => void
}

export function Onboard ({ onCreateFile }: OnboardProps) {
  return (
    <S.Wrapper>
      <S.MessageContainer>
        <h2>Add a new file to start.</h2>
        <S.Button onClick={onCreateFile}>
          <AddIcon />
          <span>Add file</span>
        </S.Button>
      </S.MessageContainer>
      <S.Illustration />
    </S.Wrapper>
  )
}
