import styled from 'styled-components/macro'

import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;

  display: flex;
`
