import React from 'react'

import Animal from './Animal'

function Hello (props) {
  return (
    <div className= 'hello'>
    <div>Hello {props.name} you crazy kook.</div>
    <Animal name="squirrel"/>
    </div>
  )
}

export default Hello