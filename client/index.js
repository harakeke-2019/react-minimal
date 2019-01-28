import React from 'react'
import ReactDOM from 'react-dom'

import Animals from './components/Animals'

const data = {name: 'humans'}

const animalNames = [
  {
    name: 'tiger',
    url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Royal_Bengal_Tiger_at_Kanha_National_Park.jpg'
  },
  {
    name: 'dog',
    url: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Bow_bow.jpg'
  }
]

function helloTemplate (props) {
  return (
    <div>
      <div>hello {props.name}</div>
      <Animals names={animalNames}/>
    </div>
  )
}

const view = helloTemplate(data)

const placeToMount = document.getElementById('root')
// const newMountPoint = document.getElementById('newPoint')

ReactDOM.render(view, placeToMount)
// ReactDOM.render(view, newMountPoint)
