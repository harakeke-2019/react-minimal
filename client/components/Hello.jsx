import React from 'react'

import Animal from './Animal'

const animals = [{id: 1, name: 'Squirrel'}, {id: 2, name: 'Sea Otter'}, {id: 3, name: 'Pangolin'}]

function Hello (props) {
  return (
    <div>
      <div className= 'hello'>Hello {props.name} you crazy kook!</div>
      <div><Animal animals= {animals}/></div>
    </div>
  )
}

export default Hello
