import { useState } from 'react'
import styled, { css } from 'styled-components/macro'

import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { Onboard } from 'onboard'
import { Topbar } from 'topbar'

import { useFiles } from 'resources/files/use-files'

export function App () {
  const [isSidebarHidden, setIsSidebarHidden] = useState(true)
  const [isEditorMode, setIsEditorMode] = useState(true)
  const {
    files,
    inputRef,
    selectedFile,
    handleCreateFile,
    handleSelectFile,
    handleRemoveFile,
    handleUpdateFile,
  } = useFiles()

  const handleDisplayModeChange = () => {
    setIsEditorMode(prevState => !prevState)
  }

  return (
    <Container>
      <Topbar
        isEditorMode={isEditorMode}
        onDisplayModeChange={handleDisplayModeChange}
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
          isEditorMode={isEditorMode}
          inputRef={inputRef}
          onTouch={setIsSidebarHidden}
          onUpdate={handleUpdateFile}
          selectedFile={selectedFile}
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
