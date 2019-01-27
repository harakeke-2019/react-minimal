import React from 'react'

import Gripes from './Gripes'

function Appliance (props) {
  return (
    <div>
      <h1>Hello, I am the EDA {props.machine.name} </h1>
      <img src={props.machine.image} />
      < Gripes activity={props.machine.activity} emotion ={props.machine.emotion} feeling={props.machine.feeling} />
    </div>
  )
}

export default Appliance

