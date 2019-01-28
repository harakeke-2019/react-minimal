import React from 'react'

// Import child
import Talofa from './Talofa'
import Colours from './Colours'

const kumaraColours = ['gold', 'purple', 'orange', 'yellow']

const taroColours = ['white', 'pink', 'grey']

function Kiaora (props) {
  return (
    <div>
    <h1>
    Kia ora 
    {props.name
      ? " Kumara"
      : " Taro"
    }
    </h1>
    <h3>There are lots of different types of 
        {props.name
      ? " Kumara"
      : " Taro"
    }
    </h3>

    {props.showKumara
      ? <Colours name="kumaras" kumaraColours={kumaraColours} />
      : <Talofa name="Taros" taroColours={taroColours} />
    }
   </div>    
)
}

export default Kiaora
