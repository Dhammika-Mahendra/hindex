import React from 'react'
import Slider from './Slider'

export default function Nav() {
  return (
    <div style={{width: '200px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)', padding: '10px', boxSizing: 'border-box'}}>
        <h2>Navigation</h2>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
        <Slider />
    </div>
  )
}
