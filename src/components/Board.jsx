import React from 'react'
import Lineage from './lineage'
import tangData from '../assets/data/Tang.json'
import shillaData from '../assets/data/Shilla.json'
import goguryeoData from '../assets/data/Goguryeo.json'
import baekjeData from '../assets/data/Baekje.json'

import { calacOffsets } from '../util/functions'
import { useAppContext } from '../context/AppContext'
import Nav from './Nav'

export default function Board() {
    const {scale} = useAppContext()

    const [lineageData1, setLineageData1] = React.useState(null)
    const [lineageData2, setLineageData2] = React.useState(null)
    const [lineageData3, setLineageData3] = React.useState(null)
    const [lineageData4, setLineageData4] = React.useState(null)
    const [offSets,setOffsets] = React.useState([]) 

    React.useEffect(() => {
        setLineageData1(tangData)
        setLineageData2(shillaData)
        setLineageData3(goguryeoData)
        setLineageData4(baekjeData)
        setOffsets(calacOffsets(tangData,shillaData,goguryeoData,baekjeData))
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
                height: '100vh', 
                width: '100vw', 
                overflowY: 'scroll',
                flexDirection: 'row', 
                display: 'flex'
                }}>
                <Lineage data={lineageData1} offset={offSets[0]*scale}/>
                <Lineage data={lineageData2} offset={offSets[1]*scale}/>
                <Lineage data={lineageData3} offset={offSets[2]*scale}/>
                <Lineage data={lineageData4} offset={offSets[3]*scale}/>
            </div>
        </div>
    )
}
