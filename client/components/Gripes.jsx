import React from 'react'

function Gripes (props) {
  return (
    <div>
      Every day, I have to {props.activity}. <br />
      I am so {props.emotion}. <br />
      I feel so {props.feeling}.
    </div>
  )
}

export default Gripes