import React, { useEffect, useState } from 'react'
import { getRandomColor } from '../util/functions'

export default function Domain({data,offset,scale}) {

    const [height,setHeight]= useState(Math.abs(to-from)*scale)
    const [color,setColor]= useState(getRandomColor())
    React.useEffect(() => {
        setHeight(Math.abs(to-from)*scale)}, 
    [scale])

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
            {data.name}
    </div>
  )
}
