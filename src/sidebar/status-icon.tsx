import styled, { keyframes } from 'styled-components/macro'

import { ReactComponent as Saved } from 'ui/assets/check.svg'
import { ReactComponent as EditingIcon } from 'ui/assets/ellipse.svg'
import { ReactComponent as Spinner } from 'ui/assets/spinner.svg'

import { Status } from 'sidebar'

type StatusIconProps = {
  status: Status
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  const Comp = {
    editing: EditingIcon,
    saved: SavedIcon,
    saving: SavingIcon,
  }[status]

  return <Comp aria-hidden='true' focusable='false' />
}

const SavedIcon = styled(Saved)`
  color: ${({ theme }) => theme.colors.primary}
`

const spin = keyframes`
  from {
    transform: rotate(0turn)
  }
  to {
    transform: rotate(1turn)
  }
`

const SavingIcon = styled(Spinner)`
  animation: ${spin} 1000ms linear infinite;
`
