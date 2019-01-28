import React from 'react'

function City (props) {
  return (
    <div>
      <div className="purple">Happy {props.name} Day!</div>
      <div>You should go to one of the beaches to have fun.</div>
      <div className="blue">
        <ul>
          {props.beachNames.map(beach => {
            return <li key={beach}> { beach }</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default City
