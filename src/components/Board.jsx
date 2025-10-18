import React, { useEffect } from 'react'
import Lineage from './lineage'
import { useAppContext } from '../context/AppContext'
import Nav from './Nav/Nav'
import { calacOffsets } from '../util/functions'    
import Timeline from './Timeline'

export default function Board() {
    const {scale, lineageData, offSets, setOffsets, addedFiles, setAddedFiles} = useAppContext()

    useEffect(() => {
        //extract the data property of all elements from addedFiles
        const filteredData = addedFiles.map(file => file.data);
        setOffsets(calacOffsets(...filteredData).offset); 
    }, [addedFiles, scale])

    return (
        <div style={{
                height: '100vh', 
                width: '100vw', 
                flexDirection: 'row', 
                display: 'flex',
                justifyContent: 'flex-start'
                }}>
            <Nav />
            <Timeline />
            <div style={{
                backgroundColor: '#f0f0f0',
                height: '100vh', 
                width: '100%', 
                overflowY: 'scroll',
                flexDirection: 'row', 
                display: 'flex',
                justifyContent: 'center',
                }}>
                {
                    addedFiles.map((data, index) => (
                        <Lineage 
                            key={data.id} 
                            data={data.data} 
                            offset={offSets[index]*scale || 0} 
                        />
                    ))
                }
            </div>
        </div>
    )
}
