import React, { createContext, useContext, useState } from 'react'
import tang from '../assets/data/Tang.json'
import shilla from '../assets/data/Shilla.json'
import goguryeo from '../assets/data/Goguryeo.json'
import baekje from '../assets/data/Baekje.json'
import joseon from '../assets/data/Joseon.json'
import qing from '../assets/data/Qing.json'
import ming from '../assets/data/Ming.json'
import goryeo from '../assets/data/Goryeo.json'
import yuan from '../assets/data/Yuan.json'

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
  const [lineageData, setLineageData] = React.useState([tang, shilla, goguryeo, baekje, joseon, qing, ming, goryeo, yuan])
  const [addedFiles, setAddedFiles] = React.useState([])
  const [offSets,setOffsets] = React.useState([]) 

  const value = {
    scale,
    setScale,
    lineageData,
    setLineageData,
    offSets,
    setOffsets,
    addedFiles,
    setAddedFiles
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}
