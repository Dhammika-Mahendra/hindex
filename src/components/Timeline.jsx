import React from 'react'

export default function Timeline({from,to,scale}) {

    //to the next 100s multiple
    const startYear = Math.floor(from / 100) * 100;
    //to the previous 100s multiple
    const endYear = Math.floor(to / 100) * 100;

    const height = Math.abs(to - from) * scale;

  return (
    <div style={{
        height:`${height}px`, width: '50px', backgroundColor: 'yellow',
        display:'flex', flexDirection:'column', alignItems:'flex-start',justifyContent:'space-evenly'}}>
            <p>{startYear}</p>
            <p>{endYear}</p>
    </div>
  )
}
