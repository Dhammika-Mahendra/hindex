import React from 'react'
import Lineage from './lineage'
import tangData from '../assets/data/Tang.json'
import shillaData from '../assets/data/Shilla.json'

export default function Board() {
    const [lineageData1, setLineageData1] = React.useState(null)
    const [lineageData2, setLineageData2] = React.useState(null)

    React.useEffect(() => {
        setLineageData1(shillaData)
        setLineageData2(tangData)
    }, [])

    return (
        <div style={{
            height: '100vh', 
            width: '100vw', 
            overflow: 'scroll',
            flexDirection: 'row', 
            display: 'flex'
            }}>
            <Lineage data={lineageData1} offset={200}/>
            <Lineage data={lineageData2} />
        </div>
    )
}
