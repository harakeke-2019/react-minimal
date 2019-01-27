import React from 'react'

// Import child
import Talofa from './Talofa'

function Kiaora (props) {
  return (
    <div>
    <div>Kia ora {props.name}!</div>
    <img src="https://www.vegetables.co.nz/assets/_resampled/FillWyI0MDAiLCIzMDAiXQ/269~Kumara-Red-Gold-Orange-Cut-57650.jpg" alt="kumara family"/>
    <Talofa name="Taros" />
    </div>
  )
}

export default Kiaora