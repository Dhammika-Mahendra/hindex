import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function Ruler({name,chance,from,to}) {
  const { scale } = useAppContext()
  const [height,setHeight]= useState(Math.abs(to-from)*scale)

  return (
    <div style={{border:'1px solid black', paddingLeft:'5px', height: `${height}px`}}>
      <div style={{fontSize: '14px'}}>{name}</div>
      <p>{chance !== "" ? `${chance} chance` : ""}</p>
      <div style={{fontSize: '12px'}}>
        {from < 0 ? -1*from : from} {from < 0 && to > 0? "BC" : ""} - {to <0? -1*to : to} {to < 0 ? "BC" : "CE"}</div>
    </div>
  )
}
