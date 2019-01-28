import React from 'react'

function Colours (props) {
  return (
    <div>
    {props.kumaraColours.map(function(colour) {
      return <li key={colour} style={{color: colour}}>{colour}</li>
    })
    }
    </div>
  )
}

export default Colours
