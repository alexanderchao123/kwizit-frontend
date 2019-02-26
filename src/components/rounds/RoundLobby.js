import React, { Component} from 'react'
import { connect } from 'react-redux'
import { authenticateRound } from '../../store/actions/RoundActions'

class RoundLobby extends Component {
  clickHandler = (event) => {
    this.props.history.push(`/rounds/${this.props.round.pin}/questionblock`)
  }

  render() {
    return(
      <div>
        <h1>Round Lobby</h1>
        <h4>GAME PIN: {this.props.round.pin}</h4>
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
    round: state.roundInfo.round
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateRound: (roundPin, token) => dispatch(authenticateRound(roundPin, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundLobby)
