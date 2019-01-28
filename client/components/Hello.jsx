import React from 'react'
import City from './City'

const beaches =
  [ 'Longbay', 'Piha', 'Missionbay']


function Hello (props) {
  return (
    <div className="hello">
      <div>Hello {props.name}!</div>
      <City name ="Auckland" beachNames = {beaches} />

    </div>     
  )
}

export default Hello