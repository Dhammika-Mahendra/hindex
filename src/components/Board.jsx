import React, { useEffect } from 'react'
import Lineage from './lineage'
import { useAppContext } from '../context/AppContext'
import Nav from './Nav/Nav'
import { calacOffsets } from '../util/functions'    

export default function Board() {
    const {scale, lineageData, offSets, setOffsets} = useAppContext()

    useEffect(() => {
        const activeLineages = lineageData.filter(data => data.active === 1);
        //filter data property of all active lineages
        const filteredData = activeLineages.map(data => data.data);
        //make above a list of json objects
        setOffsets(calacOffsets(...filteredData));
    }, [lineageData, scale])

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
                {
                    lineageData && lineageData
                        .filter(data => data.active === 1)
                        .map((data, index) => (
                            <Lineage key={index} data={data.data} offset={offSets[index]*scale}/>
                        ))
                }
            </div>
        </div>
    )
}
