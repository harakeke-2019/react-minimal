import React from 'react'
import ReactDOM from 'react-dom'

import Appliance from './components/Appliance'

const coffeeMachine =
  {
    image: 'https://www.alturacoffee.co.nz/site/altura/images/items/silvia_iso_1.jpg',
    name: 'coffee machine',
    complaints: {
      activity: 'make people coffee',
      emotion: 'overworked and dirty',
      feeling: 'used and abused and in desperate need of a wash'},
    isFull: false,
    contents: ['rotten coffee grinds', 'musty water', 'dirty filters', 'regret']
  }

const fridge = {
  image: 'http://www.surgicalsojourner.com/wp-content/uploads/2015/09/fridge.jpg',
  name: 'fridge',
  complaints: {
    activity: "keep people's food cold...like my insides",
    emotion: "overloaded with other people's rotten avocadoes",
    feeling: 'like a glorified compost bin'},
  isFull: true,
  contents: ['4 day old salad', 'avocado seeds', 'empty water bottles']
}

ReactDOM.render(<Appliance machine = {fridge} />, document.getElementById('root'))
