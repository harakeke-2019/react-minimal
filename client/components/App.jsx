import React from 'react'
import Hello from './Hello'
import Study from './Study'

function App (props) {
  return (
    <div className = "app">
      <h1 className="blue">Shall we go to Beach or go to EDA?  </h1>
      {
        props.goToBeach
          ? <Hello name ="Jenny" />
          : <Study />
      }

    </div>
  )
}

export default App