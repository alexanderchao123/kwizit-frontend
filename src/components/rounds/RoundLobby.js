import React, { Component} from 'react'

class RoundLobby extends Component {
  render() {
    return(
      <div>
        <h1>Round Lobby</h1>
        <h4>{this.props.match.params.pin}</h4>
      </div>
    )
  }
}

export default RoundLobby
