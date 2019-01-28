import React from 'react'

function Colors (props) {
  return (
    <div className="colors">
    This is the colors component
      <ul>
        {props.colorNames.map(el => {
          return <li key={el} style={{backgroundColor: el}}>{el}</li>
        })}
      </ul>
    </div>
  )
}

export default Colors
