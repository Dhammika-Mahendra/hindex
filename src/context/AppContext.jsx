import React, { createContext, useContext, useState } from 'react'

// Create the context
const AppContext = createContext()

// Custom hook to use the context
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}

// Context provider component
export const AppProvider = ({ children }) => {
  const [scale, setScale] = useState(8)
  const [fileList, setFileList] = useState([])
  const [addedFiles, setAddedFiles] = useState([])

  const value = {
    scale,
    setScale,
    fileList,
    setFileList,
    addedFiles,
    setAddedFiles
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
