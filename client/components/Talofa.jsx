import React from 'react'

function Talofa (props) {
  return (
    <div>
      <div>
        <img src="https://insearchofyummyness.com/wp-content/uploads/2017/01/Taro-Root-Updated2.jpg" alt="picture of taro"/>
    {props.taroColours.map(function(colour) {
      return <li key={colour} style={{backgroundColor: colour}}>{colour}</li>
    })
    }
    </div>
    </div>
  )
}

export default Talofa

