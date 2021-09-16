import styled from 'styled-components/macro'

import { Sidebar } from 'sidebar'
import { Content } from 'content'

import { useFiles } from 'resources/files/use-files'

export function App () {
  const {
    files,
    inputRef,
    selectedFile,
    handleCreateFile,
    handleSelectFile,
    handleRemoveFile,
    handleUpdateFile,
  } = useFiles()

  return (
    <Container>
      <Sidebar
        files={files}
        onCreateFile={handleCreateFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={handleRemoveFile}
      />
      <Content
        inputRef={inputRef}
        onUpdate={handleUpdateFile}
        selectedFile={selectedFile}
      />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;

  display: flex;
`
