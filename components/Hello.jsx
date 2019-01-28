import React from 'react'
import Description from './Description'

function Hello (props) {
  return (
    <div>
      <h1>Hello {props.data.name} </h1>
      <Description color={props.data.color} />
    </div>
  )
}

export default Hello
