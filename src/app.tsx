import styled from 'styled-components/macro'

import { Sidebar } from 'sidebar'

export function App () {
  return (
    <Container>
      <Sidebar />
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;

  display: flex;
`
