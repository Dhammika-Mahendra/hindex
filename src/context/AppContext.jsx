import React, { createContext, useContext, useState } from 'react'
import tang from '../assets/data/Tang.json'
import shilla from '../assets/data/Shilla.json'
import goguryeo from '../assets/data/Goguryeo.json'
import baekje from '../assets/data/Baekje.json'
import { calacOffsets, extractHeaderProps } from '../util/functions'

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
  const [offSets,setOffsets] = React.useState(calacOffsets(tang.data, shilla.data, goguryeo.data, baekje.data)) 
  const [fileList, setFileList] = useState(extractHeaderProps([tang, shilla, goguryeo, baekje]))
  const [addedFiles, setAddedFiles] = useState([])
  const [lineageData, setLineageData] = React.useState([tang.data, shilla.data, goguryeo.data, baekje.data])

  const value = {
    scale,
    setScale,
    fileList,
    setFileList,
    addedFiles,
    setAddedFiles,
    lineageData,
    setLineageData,
    offSets,
    setOffsets
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
