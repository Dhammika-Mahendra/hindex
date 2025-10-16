import React from 'react'
import Slider from './Slider'
import Add from './Add/Add'

export default function Nav() {
  return (
    <div style={{width: '200px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)', padding: '10px', boxSizing: 'border-box'}}>
        <Add />
        <Slider />
    </div>
  )
}
