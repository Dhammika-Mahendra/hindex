import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import AddItem from './AddItem';

export default function Add() {
  const { lineageData, setLineageData, addedFiles, setAddedFiles } = useAppContext()
  const [search, setSearch] = useState("");
  const filteredList = lineageData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  const addFile = (id) => {
   //add from lineageData to addedFiles based on id (check if already added)
    const fileToAdd = lineageData.find(item => item.id === id);
    if (fileToAdd && !addedFiles.some(file => file.id === id)) {
      setAddedFiles([...addedFiles, fileToAdd]);
    }
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search" 
        className="input input-sm"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      
      <div style={{marginTop:'5px', marginBottom:'2px'}}>
        <select
          id="region-select"
          className="block w-full px-3 py-1 border border-gray-300 rounded-sm transition-colors"
          style={{ fontSize: '12px' }}
        >
          <option value="L1">Dynasty</option>
          <option value="L2">Kingdom</option>
          <option value="L3">Event</option>
        </select>
      </div>

      <ul style={{height: '200px', overflowY: 'auto', paddingLeft :'5px', paddingRight: '5px', border: '1px solid #ccc'}}>
        {filteredList.map(item => (
          <AddItem key={item.id} id={item.id} name={item.name} addFile={addFile} />
        ))}
      </ul>
    </div>
  )
}
