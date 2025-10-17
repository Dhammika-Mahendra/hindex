import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import AddItem from './AddItem';

export default function Add() {
  const { lineageData, setLineageData } = useAppContext()
  const [search, setSearch] = useState("");
  const filteredList = lineageData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  const addFile = (id) => {
   //make the corresponding id element in lineageData active :1
    const addedFile = lineageData.find(item => item.id === id);
    if (addedFile) {
      addedFile.active = 1;
      setLineageData([...lineageData]);
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
      <ul style={{height: '200px', overflowY: 'auto', paddingLeft :'5px', paddingRight: '5px', marginTop: '10px', border: '1px solid #ccc'}}>
        {filteredList.map(item => (
          <AddItem key={item.id} id={item.id} name={item.name} addFile={addFile} />
        ))}
      </ul>
    </div>
  )
}
