import React from 'react'
import Boxes from './Boxes'

const dimins = {
  style: {
    height: '200px',
    width: '200px',
    backgroundColor: 'yellow'
  }
}

function Colours (props) {
  return (
    <div>
      <h1>
  this is {props.colourNames.map(names => {
          return (
            // <li key={names}>{names}</li>)
            <li key={names}> <Boxes name={names} diminsions={dimins}/> </li>)
        })}
      </h1>
    </div>
  )
}

export default Colours
