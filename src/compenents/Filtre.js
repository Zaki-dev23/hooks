import React from 'react'
import { useState } from 'react'

function Filtre(props) {
    const [filtre,useFiltre] = useState();
  return (
    <div>
        <input 
        onChange={ e => console.log(e.target.value)} 
        placeholder="Search By Title..."/>
        <input 
        type="number"
        onChange={ e => console.log(e.target.value)} 
        placeholder="Search By Rating..."/>
    </div>
  )
}

export default Filtre