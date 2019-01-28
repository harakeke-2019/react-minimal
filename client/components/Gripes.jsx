import React from 'react'

class Gripes extends React.Component {
  render () {
    return (
      <div>
        Every day, I have to {this.props.machineComplaints.activity}. <br />
        I am so {this.props.machineComplaints.emotion}. <br />
        I feel {this.props.machineComplaints.feeling}.
      </div>

    )
  }
}

export default Gripes
