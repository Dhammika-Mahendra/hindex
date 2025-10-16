import React from 'react'
import Lineage from './lineage'
import tang from '../assets/data/Tang.json'
import shilla from '../assets/data/Shilla.json'
import goguryeo from '../assets/data/Goguryeo.json'
import baekje from '../assets/data/Baekje.json'

import { calacOffsets } from '../util/functions'
import { useAppContext } from '../context/AppContext'
import Nav from './Nav/Nav'

export default function Board() {
    const {scale, setFileList} = useAppContext()

    const [lineageData1, setLineageData1] = React.useState(null)
    const [lineageData2, setLineageData2] = React.useState(null)
    const [lineageData3, setLineageData3] = React.useState(null)
    const [lineageData4, setLineageData4] = React.useState(null)
    const [offSets,setOffsets] = React.useState([]) 

    React.useEffect(() => {
        setLineageData1(tang)
        setLineageData2(shilla)
        setLineageData3(goguryeo)
        setLineageData4(baekje)
        setFileList(['tang', 'shilla', 'goguryeo', 'baekje'])
        setOffsets(calacOffsets(tang, shilla, goguryeo, baekje))
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
                <Lineage data={lineageData1} offset={offSets[0]*scale}/>
                <Lineage data={lineageData2} offset={offSets[1]*scale}/>
                <Lineage data={lineageData3} offset={offSets[2]*scale}/>
                <Lineage data={lineageData4} offset={offSets[3]*scale}/>
            </div>
        </div>
    )
}
