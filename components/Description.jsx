import React from 'react'

function Description (props) {
  console.log(props.color)
  return (
    <div style={props.color}>
    Welcome to profile
    </div>
  )
}

export default Description
