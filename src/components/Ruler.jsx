import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { getRandomColor } from '../util/functions'

export default function Ruler({name,chance,from,to}) {
  const { scale } = useAppContext()
  const [height,setHeight]= useState(Math.abs(to-from)*scale)

  return (
    <div style={{backgroundColor : getRandomColor(), paddingLeft:'5px', height: `${height}px`}}>
      {height>15 ? 
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <div style={{fontSize: '14px'}}>{name}</div>
        <div style={{fontSize: '10px',marginTop:'-5px'}}>{chance !== "" ? `${chance} time` : ""}</div>
      </div>
       : ''}
      {height>35 ? <div style={{fontSize: '12px',marginTop:'-5px'}}>
        {from < 0 ? -1*from : from} {from < 0 && to > 0? "BC" : ""} - {to <0? -1*to : to} {to < 0 ? "BC" : "CE"}</div> : ''}
    </div>
  )
}
