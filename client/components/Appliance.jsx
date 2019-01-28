import React from 'react'

import Gripes from './Gripes'
import FullOf from './FullOf'


class Appliance extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello, I am the EDA {this.props.machine.name} </h1>
        <img src={this.props.machine.image} />
        < Gripes machineComplaints={this.props.machine.complaints} />
        {this.props.machine.isFull 
          ? <FullOf machineContents={this.props.machine.contents}/>
          : <p>I am just full of pain</p>
        }      
      </div>
    )
  }
}

export default Appliance

