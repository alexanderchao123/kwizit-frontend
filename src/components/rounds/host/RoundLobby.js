import React, { Component} from 'react'
import { connect } from 'react-redux'
import { authenticateRound, renderChoiceBlock } from '../../../store/actions/RoundActions'

class RoundLobby extends Component {
  clickHandler = (event) => {
    this.props.renderChoiceBlock(this.props.socket)
    this.props.history.push(`/rounds/host/${this.props.round.pin}/questionblock`)
  }

  render() {
    let players = this.props.players.map((player, index) => {
      return <li key={index}>{player}</li>
    })

    return(
      <div>
        <h1>Round Lobby</h1>
        <h4>GAME PIN: {this.props.round.pin}</h4>
        <ul>
          {players}
        </ul>
        <button type="button" onClick={this.clickHandler}>Start Round</button>
      </div>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    this.props.authenticateRound(roundPin, token)
  }
}

const mapStateToProps = (state) => {
  return {
    round: state.roundInfo.round,
    players: state.roundInfo.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateRound: (roundPin, token) => dispatch(authenticateRound(roundPin, token)),
    renderChoiceBlock: (socket) => dispatch(renderChoiceBlock(socket))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundLobby)
