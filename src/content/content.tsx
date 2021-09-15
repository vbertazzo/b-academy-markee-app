import { ChangeEvent, RefObject, useState } from 'react'
import marked from 'marked'
import { Header } from './header'

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
}

export function Content ({ inputRef }: ContentProps) {
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.Main>
      <Header inputRef={inputRef} />

      <S.SplitPane>
        <S.Editor>
          <S.ContentInput
            placeholder='Your markdown here'
            value={content}
            onChange={handleChange}
          />
        </S.Editor>

        <S.Divider />

        <S.Preview dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </S.SplitPane>
    </S.Main>
  )
}
