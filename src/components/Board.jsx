import React, { useEffect } from 'react'
import Lineage from './lineage'
import { useAppContext } from '../context/AppContext'
import Nav from './Nav/Nav'
import { calacOffsets } from '../util/functions'    

export default function Board() {
    const {scale, lineageData, offSets, setOffsets, addedFiles} = useAppContext()

    useEffect(() => {
        setOffsets(calacOffsets(addedFiles))
    }, [addedFiles])

    return (
        <div style={{
                height: '100vh', 
                width: '100vw', 
                flexDirection: 'row', 
                display: 'flex'
                }}>
            <Nav />
            <div style={{
                backgroundColor: '#f0f0f0',
                height: '100vh', 
                width: '100%', 
                overflowY: 'scroll',
                flexDirection: 'row', 
                display: 'flex',
                justifyContent: 'center',
                }}>
                {lineageData && lineageData
                    .filter(data => addedFiles.some(file => file.id === data.id))
                    .map((data, index) => (
                        <Lineage key={index} data={data.data} offset={offSets[index]*scale}/>
                    ))}
            </div>
        </div>
    )
}
