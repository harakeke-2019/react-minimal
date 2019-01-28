import React from 'react'

class FullOf extends React.Component {
  render () {
    return (
      <div>
        <h4>I am full of:</h4>
        <ul>
          {this.props.machineContents.map(item => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default FullOf
