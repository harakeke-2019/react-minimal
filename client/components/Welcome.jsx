import React from 'react'

import Aliens from './Aliens'

function Welcome (props) {
  return (
    <div>Welcome {props.Humans.Name}
      <hr></hr>
      <Aliens name={props.Aliens} />
    </div>
  )
}

export default Welcome
