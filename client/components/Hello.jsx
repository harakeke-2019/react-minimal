import React from 'react'
import City from './City'

const beaches =
  [ 'longbay', 'piha', 'missionbay']


function Hello (props) {
  return (
    <div className="hello">
      <div>hello {props.name}</div>
      <City name ="Auckland" beachNames = {beaches} />

    </div>     
  )
}

export default Hello