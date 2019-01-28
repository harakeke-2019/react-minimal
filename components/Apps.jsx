import React from 'react'
import Hello from './Hello'
import Colours from './Colours'

const data = {
  colgitor: {
    color: 'blue'
  },
  name: 'Grant'
}

const PrimaryColours = ['red', 'blue', 'yellow']

function Apps (props) {
  return (
    <div>
      {props.happy ? <Hello data={data} foo='bar'/> : <Colours colourNames={PrimaryColours} />}
    </div>
  )
}

export default Apps
