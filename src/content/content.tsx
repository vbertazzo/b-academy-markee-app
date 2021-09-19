import { ChangeEvent, RefObject, Dispatch, SetStateAction } from 'react'
import marked from 'marked'
import { Header } from './header'
import { Toast } from './toast'

import { useToast } from './toast/use-toast'
import { File } from 'resources/files/types'

import 'highlight.js/styles/xcode.css'
import * as S from './content-styles'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (h?.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
  selectedFile?: File
  onUpdate: ({ type, value }: Record<string, string>) => void
  onTouch: Dispatch<SetStateAction<boolean>>
}

export function Content ({
  inputRef,
  onUpdate,
  onTouch,
  selectedFile,
}: ContentProps) {
  const {
    isToastVisible,
    openToast,
    setToastMessage,
    toastMessage,
  } = useToast()

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate({ type: 'content', value: e.target.value })
  }

  const handleCopyClick = () => {
    if (selectedFile) {
      navigator.clipboard.writeText(selectedFile.content).then(
        () => {
          setToastMessage('Copied successfully! ✔️')
          openToast()
        },
        () => {
          setToastMessage('Copy failed! 💔')
          openToast()
        },
      )
    }
  }

  if (!selectedFile) {
    return null
  }

  return (
    <S.Main onTouchStart={() => onTouch(true)}>
      {isToastVisible && (
        <Toast>{toastMessage}</Toast>
      )}

      <Header
        inputRef={inputRef}
        onCopy={handleCopyClick}
        onUpdate={onUpdate}
        selectedFileName={selectedFile.name}
      />

      <S.SplitPane>
        <S.Editor>
          <S.ContentInput
            onChange={handleContentChange}
            placeholder='Your markdown here'
            value={selectedFile.content}
          />
        </S.Editor>

        <S.Divider />

        <S.PreviewWrapper>
          <S.Preview
            dangerouslySetInnerHTML={{ __html: marked(selectedFile.content) }}
            tabIndex={0}
          />
        </S.PreviewWrapper>
      </S.SplitPane>
    </S.Main>
  )
}
