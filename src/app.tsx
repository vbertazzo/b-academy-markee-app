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
    <Container isSidebarHidden={isSidebarHidden}>
      <Topbar
        onShowSidebar={() => setIsSidebarHidden(false)}
        selectedFileName={selectedFile?.name}
      />
      <Sidebar
        files={files}
        isSidebarHidden={isSidebarHidden}
        onCreateFile={handleCreateFile}
        onHideSidebar={() => setIsSidebarHidden(true)}
        onRemoveFile={handleRemoveFile}
        onSelectFile={handleSelectFile}
      />

      {files.length === 0 && <Onboard onCreateFile={handleCreateFile} />}

      {files.length > 0 &&
        <Content
          inputRef={inputRef}
          onTouch={setIsSidebarHidden}
          onUpdate={handleUpdateFile}
          selectedFile={selectedFile}
        />}
    </Container>
  )
}

type ContainerType = {
  isSidebarHidden: boolean
}

const Container = styled.div<ContainerType>`${({
  theme,
  isSidebarHidden,
}) => css`
  height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    'topbar'
    'main'
  ;

  ${!isSidebarHidden &&
    css`
      overflow-y: hidden;
    `
  }

  ${theme.breakpoints.forDesktopUp} {
    grid-template-columns: min-content 1fr;
    grid-template-rows: 100%;
    grid-template-areas:
      'sidebar main';
    overflow: hidden;
  }
`}`
