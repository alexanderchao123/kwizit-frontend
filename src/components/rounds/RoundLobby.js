import React, { Component} from 'react'
import { connect } from 'react-redux'
import { authenticateRound } from '../../store/actions/RoundActions'

class RoundLobby extends Component {
  render() {
    return(
      <div>
        <h1>Round Lobby</h1>
        <h4>GAME PIN: {this.props.round.pin}</h4>
      </div>
    )
  }

  componentDidMount() {
    // dispatch thunk action to authenticate round then set state
    let roundId = this.props.match.params.pin
    this.props.authenticateRound(roundId)
  }
}

const mapStateToProps = (state) => {
  return {
    round: state.roundInfo.round
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateRound: (roundId) => dispatch(authenticateRound(roundId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundLobby)
