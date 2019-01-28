import React from 'react'


class Gripes extends React.Component {
  render(){
    return (
      <div>
        Every day, I have to {this.props.activity}. <br />
        I am so {this.props.emotion}. <br />
        I feel {this.props.feeling}.
      </div>

    )
  }
}

export default Gripes
