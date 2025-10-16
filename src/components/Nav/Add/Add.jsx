import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext'
import AddItem from './AddItem';

export default function Add() {
  const { fileList, setFileList } = useAppContext()
  const [search, setSearch] = useState("");
  const filteredList = fileList.filter(item => item.toLowerCase().includes(search.toLowerCase()));


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
          <AddItem key={item} name={item} />
        ))}
      </ul>
    </div>
  )
}
