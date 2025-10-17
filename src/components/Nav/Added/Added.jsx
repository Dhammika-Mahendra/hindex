import React from 'react'
import { useAppContext } from '../../../context/AppContext'
import AddedItem from './AddedItem'

export default function () {
    
  const { setFileList, addedFiles, setAddedFiles } = useAppContext()

  const deleteFile = (id) => {
    //remove from fileList 
    const newList = addedFiles.filter(item => item.id !== id);
    setAddedFiles(newList);
    //add to addedFiles
    const addedFile = addedFiles.find(item => item.id === id);
    setFileList(prev => [...prev, addedFile]);
 }

  return (
        <div>
          <ul style={{height: '200px', overflowY: 'auto', paddingLeft :'5px', paddingRight: '5px', marginTop: '10px', border: '1px solid #ccc'}}>
            {addedFiles.map(item => (
              <AddedItem key={item.id} id={item.id} name={item.name} deleteFile={deleteFile}/>
            ))}
          </ul>
        </div>
  )
}
