import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

import * as S from './toast-styles'

type ToastProps = {
  children: ReactNode | ReactNode[]
}

export function Toast ({ children }: ToastProps) {
  return createPortal(
    <S.Toast aria-live='polite'>
      {children}
    </S.Toast>,
    document.body,
  )
}
