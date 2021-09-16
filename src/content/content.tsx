import { ChangeEvent, RefObject } from 'react'
import marked from 'marked'
import { Header } from './header'

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
}

export function Content ({ inputRef, selectedFile, onUpdate }: ContentProps) {
  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onUpdate({ type: 'content', value: e.target.value })
  }

  if (!selectedFile) {
    return null
  }

  return (
    <S.Main>
      <Header
        inputRef={inputRef}
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
          />
        </S.PreviewWrapper>
      </S.SplitPane>
    </S.Main>
  )
}
