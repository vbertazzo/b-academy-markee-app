import { useEffect, useState } from 'react'

export function useToast () {
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function closeToast () {
      if (!isToastVisible) {
        return
      }

      timer = setTimeout(() => {
        setIsToastVisible(false)
      }, 6000)
    }

    closeToast()

    return () => clearTimeout(timer)
  }, [isToastVisible])

  const openToast = () => {
    setIsToastVisible(true)
  }

  return {
    isToastVisible,
    openToast,
    toastMessage,
    setToastMessage,
  }
}
