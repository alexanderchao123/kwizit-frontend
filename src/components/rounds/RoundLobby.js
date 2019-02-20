import React, { Component} from 'react'

class RoundLobby extends Component {
  render() {
    return(
      <div>
        <h1>Round Lobby</h1>
        <h4>GAME PIN: {this.props.match.params.pin}</h4>
      </div>
    )
  }

  componentDidMount() {
    // dispatch thunk action to authenticate round then set state
  }
}

export default RoundLobby
