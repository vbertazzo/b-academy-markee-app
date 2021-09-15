import styled from 'styled-components/macro'

import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useRef } from 'react'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Container>
      <Sidebar inputRef={inputRef} />
      <Content inputRef={inputRef} />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;

  display: flex;
`
