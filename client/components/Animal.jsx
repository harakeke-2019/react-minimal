import React from 'react'

const zoo = ['Monkey', 'Muppet', 'Ngeru']

function Animal (props) {
  return (
    <div>
      The Animal is a {props.name}
      <br></br>
      <img className = "img" src="./images/animal.jpeg" />
    </div>
  )
}

export default Animal
