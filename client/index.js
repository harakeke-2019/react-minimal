import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/Hello'
import App from './components/App'

ReactDOM.render(
  <Hello />,
  document.getElementById('greeting')
)
ReactDOM.render(
  <App showAnimal={false} />,
  document.getElementById('root')
)

