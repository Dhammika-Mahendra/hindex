import React, { useEffect } from 'react'
import Lineage from './lineage'
import { useAppContext } from '../context/AppContext'
import Nav from './Nav/Nav'
import { calcOffsets } from '../util/functions'    
import Timeline from './Timeline'

export default function Board() {
    const {scale, lineageData, offSets, setOffsets, addedFiles, setAddedFiles} = useAppContext()

    useEffect(() => {
        //extract the data property of all elements from addedFiles
        const filteredData = addedFiles.map(file => file.data);
        setOffsets(calcOffsets(...filteredData)); 
    }, [addedFiles, scale])

    return (
        <div style={{
                height: '100vh', 
                width: '100vw', 
                flexDirection: 'row', 
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-start'
                }}>
                    
            <Nav />

            <div 
            style={{height: '100%',width: '100%',display: 'flex', flexDirection: 'row', alignItems: 'flex-start', overflowY: 'scroll',backgroundColor: '#f0f0f0'}}
            >
                <Timeline from={offSets.start} to={offSets.end} scale={scale} />

                <div style={{
                    height: '100%',
                    width: '100%',
                    flexDirection: 'row', 
                    display: 'flex',
                    justifyContent: 'center',
                    }}>
                    {
                        addedFiles.map((data, index) => (
                            <Lineage 
                                key={data.id} 
                                data={data.data} 
                                offset={offSets.offset[index]*scale || 0} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
