import React from 'react'
import Animal from './Animal'

function Hello (props) {
  return (
    <div>
      <h1>Yoza  {props.name} you muddy funksta!! Gotta joke for you, pick one </h1>
      <h3><Animal name="Monkey"/></h3>
    </div>
  )
}

export default Hello
