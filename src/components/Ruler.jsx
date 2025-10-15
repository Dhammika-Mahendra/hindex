import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function Ruler({name,chance,from,to}) {
  const { scale } = useAppContext()
  const [height,setHeight]= useState(Math.abs(to-from)*scale)

  return (
    <div style={{border:'1px solid black', margin:'2px', padding:'1 0px', height: `${height}px`}}>
      <h3>{name}</h3>
      <p>{chance !== "" ? `${chance} chance` : ""}</p>
      <div>{from < 0 ? -1*from : from} {from < 0 && to > 0? "BC" : ""} - {to <0? -1*to : to} {to < 0 ? "BC" : "CE"}</div>
    </div>
  )
}
