import styled, { keyframes } from 'styled-components/macro'

import { Check as Saved, Ellipse as EditingIcon, Spinner } from 'ui/icons'

import { Status } from 'resources/files/types'

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
