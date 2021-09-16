import { useRef, useState, MouseEvent, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import localforage from 'localforage'
import { File } from 'resources/files/types'

export function useFiles () {
  const inputRef = useRef<HTMLInputElement>(null)
  const [files, setFiles] = useState<File[]>([])

  const selectedFile = files.find(file => file.active)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    function updateStatus () {
      if (!selectedFile || selectedFile.status !== 'editing') {
        return
      }

      timer = setTimeout(() => {
        setFiles(prevState => prevState.map(file => {
          if (file.id === selectedFile.id) {
            return {
              ...file,
              status: 'saving',
            }
          }

          return file
        }))

        setTimeout(() => {
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
    }

    updateStatus()

    return () => clearTimeout(timer)
  }, [selectedFile])

  useEffect(() => {
    function saveFilesToStorage () {
      localforage.setItem('files', files)
    }

    saveFilesToStorage()
  }, [files])

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

  const handleRemoveFile = (id: string) => {
    setFiles(prevState => prevState.filter(file => file.id !== id))
  }

  const handleSelectFile = (id: string) => (e: MouseEvent) => {
    e.preventDefault()
    inputRef.current?.focus()

    setFiles(prevState => prevState.map(file => ({
      ...file,
      active: file.id === id,
    })))
  }

  const handleUpdateFile = ({ type, value }: Record<string, string>) => {
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

  return {
    files,
    inputRef,
    handleCreateFile,
    handleRemoveFile,
    handleSelectFile,
    handleUpdateFile,
    selectedFile,
  }
}
