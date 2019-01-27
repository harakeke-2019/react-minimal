import React from 'react'
import City from './City'

function Hello (props) {
  return (
    <div className="hello">
      <div>hello {props.name}</div>
      <City name="Auckland" />
    </div>     
  )
}

export default Hello