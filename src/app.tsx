import { useRef, useState, MouseEvent, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components/macro'

import { File } from 'resources/files/types'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutRef = useRef<number | null>(null)
  const [files, setFiles] = useState<File[]>([])

  const selectedFile = files.find(file => file.active)

  useEffect(() => {
    if (!selectedFile || selectedFile.status !== 'editing') {
      return
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setFiles(prevState => prevState.map(file => {
        if (file.id === selectedFile.id) {
          return {
            ...file,
            status: 'saving',
          }
        }
        return file
      }))

      timeoutRef.current = window.setTimeout(() => {
        setFiles(prevState => prevState.map(file => {
          if (file.id === selectedFile.id) {
            return {
              ...file,
              status: 'saved',
            }
          }
          return file
        }))
      }, 300)
    }, 300)
  }, [selectedFile])

  const handleCreateFile = () => {
    inputRef.current?.focus()

    setFiles(prevState => prevState
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuid(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  const handleSelectFile = (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    inputRef.current?.focus()

    setFiles(prevState => prevState.map(file => ({
      ...file,
      active: file.id === id,
    })))
  }

  const updateFile = ({ type, value }: Record<string, string>) => {
    if (!selectedFile) {
      return
    }

    const validProps = ['name', 'content']

    if (!validProps.includes(type)) {
      return
    }

    setFiles(prevState => prevState.map(file => {
      if (file.id === selectedFile.id) {
        return {
          ...file,
          [type]: value,
          status: 'editing',
        }
      }
      return file
    }))
  }

  return (
    <Container>
      <Sidebar
        files={files}
        onCreateFile={handleCreateFile}
        onSelectFile={handleSelectFile}
      />
      <Content
        inputRef={inputRef}
        onUpdate={updateFile}
        selectedFile={selectedFile}
      />
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;

  display: flex;
`
