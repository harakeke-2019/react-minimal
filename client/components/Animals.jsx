import React from 'react'

function Animals (prop) {
  return (
    <div className="hello">
      <div>This animal is {prop.names.map(item => {
        return (
          < div key = {item.url}>
            <p>{ item.name}</p>
            <img src = {item.url} />
          </div>
        )
      })}</div>

    </div>
  )
}

export default Animals
