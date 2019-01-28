import React from 'react'

import Gripes from './Gripes'
import FullOf from './FullOf'

function Appliance (props) {
  return (
    <div>
      <h1>Hello, I am the EDA {props.machine.name} </h1>
      <img src={props.machine.image} />
      < Gripes activity={props.machine.activity} emotion ={props.machine.emotion} feeling={props.machine.feeling} />
      {props.machine.isFull 
        ? <FullOf machineContents={props.machine.contents}/>
        : <p>I am just full of pain</p>
      }      
    </div>
  )
}

export default Appliance

