import { useState } from 'react'
import './index.css'
import Board from './components/Board'
import { AppProvider } from './context/AppContext'


function App() {

  return (
    <AppProvider>
      <div className="relative flex">
       <Board/>
      </div>
    </AppProvider>
  )
}

export default App
