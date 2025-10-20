import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { getRandomColor } from '../util/functions'

export default function Ruler({name,chance,from,to}) {
  const { scale } = useAppContext()
  const [height,setHeight]= useState(Math.abs(to-from)*scale)
  const [color,setColor]= useState(name=='' ? 'rgba(0,0,0,0)' : getRandomColor())

  React.useEffect(() => {
    setHeight(Math.abs(to-from)*scale)}, 
  [scale])

  return (
    <div style={{backgroundColor : color, paddingLeft:'5px', height: `${height}px`}}>
      {height>15 ? 
      <div style={{display:'flex', flexDirection:'row', alignItems:'start', justifyContent:'space-between'}}>
        <p style={{fontSize: '12px'}}>{name}</p>
        <p style={{fontSize: '10px'}}>{chance !== "" ? `[${chance}]` : ""}</p>
      </div>
       : ''}
      {height>35 && name !== '' ? <div style={{fontSize: '10px',marginTop:'-2px'}}>
        {from < 0 ? -1*from : from} {from < 0 && to > 0? "BC" : ""} - {to <0? -1*to : to} {to < 0 ? "BC" : "CE"}</div> : ''}
    </div>
  )
}
