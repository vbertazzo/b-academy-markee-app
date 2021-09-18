import { useState } from 'react'
import styled, { css } from 'styled-components/macro'

import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { Onboard } from 'onboard'
import { Topbar } from 'topbar'

import { useFiles } from 'resources/files/use-files'

export function App () {
  const [isSidebarHidden, setIsSidebarHidden] = useState(true)
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
      <Topbar
        onShowSidebar={() => setIsSidebarHidden(false)}
        selectedFileName={selectedFile?.name}
      />
      <Sidebar
        files={files}
        onCreateFile={handleCreateFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={handleRemoveFile}
        isSidebarHidden={isSidebarHidden}
        onHideSidebar={() => setIsSidebarHidden(true)}
      />

      {files.length === 0 && <Onboard onCreateFile={handleCreateFile} />}

      {files.length > 0 &&
        <Content
          inputRef={inputRef}
          onUpdate={handleUpdateFile}
          selectedFile={selectedFile}
          onTouch={setIsSidebarHidden}
        />}
    </Container>
  )
}

const Container = styled.div`${({ theme }) => css`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    'topbar'
    'main'
  ;

  ${theme.breakpoints.forDesktopUp} {
    grid-template-columns: min-content 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
      'sidebar main';
  }
`}`
