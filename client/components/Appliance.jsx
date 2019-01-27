import React from 'react'

import Gripes from './Gripes'

function Appliance (props) {
  return (
    <div>
      <h1>Hello, I am the EDA {props.machine} </h1>
      <img src="https://www.alturacoffee.co.nz/site/altura/images/items/silvia_iso_1.jpg" />
      < Gripes activity=" make people coffee" emotion = "overworked and dirty" feeling="used and abused and in desperate need of a wash" />
    </div>
  )
}

export default Appliance

