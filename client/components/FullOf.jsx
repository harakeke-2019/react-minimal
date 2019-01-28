import React from 'react'

function FullOf (props) {
  return (
    <div>
      <h4>I am full of:</h4>
      <ul> 
        {props.machineContents.map(item => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default FullOf