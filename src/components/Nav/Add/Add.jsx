import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import AddItem from './AddItem';

export default function Add() {
  const { fileList, setFileList, setAddedFiles } = useAppContext()
  const [search, setSearch] = useState("");
  const filteredList = fileList.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  const addFile = (id) => {
    //remove from fileList 
    const newList = fileList.filter(item => item.id !== id);
    setFileList(newList);
    //add to addedFiles
    const addedFile = fileList.find(item => item.id === id);
    setAddedFiles(prev => [...prev, addedFile]);
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
      <ul style={{height: '200px', overflowY: 'auto', paddingLeft :'5px', paddingRight: '5px', marginTop: '10px', border: '1px solid #ccc'}}>
        {filteredList.map(item => (
          <AddItem key={item.id} id={item.id} name={item.name} addFile={addFile} />
        ))}
      </ul>
    </div>
  )
}
