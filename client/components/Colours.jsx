import React from 'react'

function Colours (props) {
  return (
    <div>

    <img src="https://www.vegetables.co.nz/assets/_resampled/FillWyI0MDAiLCIzMDAiXQ/269~Kumara-Red-Gold-Orange-Cut-57650.jpg" alt="kumara family"/>
    {props.kumaraColours.map(function(colour) {
      return <li key={colour} style={{backgroundColor: colour}}>{colour}</li>
    })
    }
    </div>
  )
}

export default Colours
