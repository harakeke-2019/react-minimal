import React from 'react'

import Welcome from './Welcome'

import Colors from './colors'

const primaryColors = ['navy', 'aqua', 'ivory', 'ruby']

function App (props) {
  return (
    <div className ="app">
      <h1>App</h1>
      {props.showWelcome
        ? <Welcome />
        : <Colors colorNames={primaryColors} />}
    </div>
  )
}

export default App
