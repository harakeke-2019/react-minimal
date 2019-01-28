import React from 'react'

// Import child
import Talofa from './Talofa'
import Colours from './Colours'

const kumaraColours = ['gold', 'purple', 'orange', 'yellow']

function Kiaora (props) {
  return (
    <div>
    <div>Kia ora {props.name}!</div>
    <img src="https://www.vegetables.co.nz/assets/_resampled/FillWyI0MDAiLCIzMDAiXQ/269~Kumara-Red-Gold-Orange-Cut-57650.jpg" alt="kumara family"/>
    <h3>There are lots of different types of kumara</h3>
    <Colours kumaraColours={kumaraColours} />
    <Talofa name="Taros" />
    </div>
  )
}

export default Kiaora