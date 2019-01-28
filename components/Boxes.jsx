import React from 'react'

function Boxes (props) {
  console.log(props.diminsions)
  return (
    <div className="ColouredBoxes">
      <div style={props.diminsions.style}>
      </div>
    </div>
  )
}

export default Boxes
