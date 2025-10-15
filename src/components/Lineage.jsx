import React from 'react'
import Ruler from './ruler'

export default function Lineage({data}) {
  return (
    <div style={{width:'150px'}}>
      {
        data ? data.map((ruler, index) => (
          <Ruler 
            key={index} 
            name={ruler.name} 
            chance={ruler.ch} 
            from={ruler.from} 
            to={ruler.to} 
          />
        )) : <p>Loading...</p>
      }
    </div>
  )
}
