import React from 'react'
import Lineage from './lineage'
import tangData from '../assets/data/Tang.json'
import shillaData from '../assets/data/Shilla.json'

export default function Board() {
    const [lineageData, setLineageData] = React.useState(null)

    React.useEffect(() => {
        setLineageData(shillaData)
    }, [])

    return (
        <div style={{height: '100vh', width: '100vw', overflow: 'scroll'}}>
            <h1>Board Component</h1>
            <Lineage data={lineageData} />
        </div>
    )
}
