import React from 'react'

function City (props) {
  return (
    <div>
      <div>Happy {props.name} Day!</div>
      <div>You should go to one of the {props.beaches} to have fun.</div>
      <div>
        <ul>
          {props.beachNames.map(beach => {
            return <li key={beach}> { beach }</li>})}
        </ul>
      </div>
    </div>
  )
}

export default City
