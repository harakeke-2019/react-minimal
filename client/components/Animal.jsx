import React from 'react'

function Animal (props) {
  return (
    <div>
    What animal do you want to be?:
      <ul>
        {props.animals.map(animal => {
          return <li key={animal.id}>{animal.name}</li>
        })}
      </ul>
    </div>
  )
}

export default Animal
