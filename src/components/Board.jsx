import React from 'react'
import Lineage from './lineage'

import { useAppContext } from '../context/AppContext'
import Nav from './Nav/Nav'

export default function Board() {
    const {scale, fileSet, setFileList, lineageData, setLineageData, offSets, setOffsets} = useAppContext()

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
                 {lineageData && lineageData.map((data, index) => (
                    <Lineage key={index} data={data} offset={offSets[index]*scale}/>
                 ))}
            </div>
        </div>
    )
}
