import React, { useEffect, useState } from 'react'
import { getRandomColor } from '../util/functions'
import { useAppContext } from '../context/AppContext'

export default function Domain({data, offset}) {

  const { scale } = useAppContext();
  const [height,setHeight]= useState(Math.abs(data.to-data.from)*scale)
  const [color,setColor]= useState(getRandomColor())
  React.useEffect(() => {
      setHeight(Math.abs(data.to-data.from)*scale)}, 
  [scale])

  const formatYear = (year) => {
    if (year < 0) return `${Math.abs(year)} BC`;
    return `${year} AD`;
  }
  return (
    <div style={{
        height: `${height}px`,
        width:'150px',
        marginLeft:'5px',
        marginRight:'2px',
        position:'relative',
        top: offset ? `${offset}px` : '0px',
        backgroundColor: color
        }}>
            <p>{data.name}</p>
            <p>{formatYear(data.from)} - {formatYear(data.to)}</p>
    </div>
  )
}
