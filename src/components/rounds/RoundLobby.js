import React, { Component} from 'react'
import { connect } from 'react-redux'
import { authenticateRound } from '../../store/actions/RoundActions'
import RoundQuestionBlock from './RoundQuestionBlock'

class RoundLobby extends Component {
  clickHandler = (event) => {
    // this.props.history.push(`/rounds/${this.props.round.pin}/questions/${}`)
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
    this.props.authenticateRound(roundPin)
  }
}

const mapStateToProps = (state) => {
  return {
    round: state.roundInfo.round
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateRound: (roundPin) => dispatch(authenticateRound(roundPin))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundLobby)
