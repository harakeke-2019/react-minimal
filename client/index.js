import React from 'react'
import ReactDOM from 'react-dom'


import Welcome from './components/Welcome'

const data = {
  Humans: {
    Name: 'John'
  },
  Aliens: {
    Name: 'Thor',
    Species: 'Asgard'
    
  }
}

const view = Welcome(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)
