import React from 'react'
import Lineage from './lineage'
import tang from '../assets/data/Tang.json'
import shilla from '../assets/data/Shilla.json'
import goguryeo from '../assets/data/Goguryeo.json'
import baekje from '../assets/data/Baekje.json'

import { calacOffsets, extractHeaderProps } from '../util/functions'
import { useAppContext } from '../context/AppContext'
import Nav from './Nav/Nav'

export default function Board() {
    const {scale, fileSet, setFileList} = useAppContext()

    const [lineageData, setLineageData] = React.useState(null)
    const [offSets,setOffsets] = React.useState([]) 

    React.useEffect(() => {
        setLineageData([tang.data, shilla.data, goguryeo.data, baekje.data])
        setFileList(extractHeaderProps([tang, shilla, goguryeo, baekje]))
        setOffsets(calacOffsets(tang.data, shilla.data, goguryeo.data, baekje.data))
    }, [])

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
