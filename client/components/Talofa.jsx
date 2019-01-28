import React from 'react'

function Talofa (props) {
  return (
    <div>
      <div>
        <img src="https://images-na.ssl-images-amazon.com/images/I/51m4xUPLM-L._SX355_.jpg" alt="picture of taro"/>
        <div>
        <div>
    {props.taroColours.map(function(colour) {
      return <li key={colour} style={{backgroundColor: colour}}>{colour}</li>
    })
    }
    </div>
          
        </div>
      </div>
    </div>
  )
}

export default Talofa

