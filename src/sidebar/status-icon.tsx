import styled, { keyframes } from 'styled-components/macro'

import { ReactComponent as Saved } from 'ui/assets/check.svg'
import { ReactComponent as EditingIcon } from 'ui/assets/ellipse.svg'
import { ReactComponent as Spinner } from 'ui/assets/spinner.svg'

import { Status } from 'sidebar'

type StatusIconProps = {
  status: Status
}

export const StatusIcon = ({ status }: StatusIconProps) => {
  if (status === 'editing') {
    return (<EditingIcon aria-hidden='true' focusable='false' />)
  }

  if (status === 'saving') {
    return <SavingIcon aria-hidden='true' focusable='false' />
  }

  if (status === 'saved') {
    return <SavedIcon aria-hidden='true' focusable='false' />
  }

  return null
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
