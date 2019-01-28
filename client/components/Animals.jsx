import React from 'react'

function Animals (prop) {
  return (
    <div className="hello">
      <p>This animal is {prop.names.mamals.tiger.name}</p>
      <img src={prop.names.mamals.tiger.url} />
    </div>
  )
}

export default Animals
