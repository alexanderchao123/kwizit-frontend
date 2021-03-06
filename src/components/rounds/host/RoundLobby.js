import React, { Component} from 'react'
import { connect } from 'react-redux'
import { renderChoiceBlock } from '../../../store/actions/RoundHostActions'

class RoundLobby extends Component {
  clickHandler = (event) => {
    this.props.renderChoiceBlock(this.props.subscription)
    this.props.history.push(`/rounds/host/${this.props.round.pin}/questionblock`)
  }

  render() {
    let players = this.props.players.map((player, index) => {
      return <li key={index}>{player.first_name}</li>
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

  componentDidMount() {}
}

const mapStateToProps = (state) => {
  return {
    round: state.roundHostInfo.round,
    players: state.roundHostInfo.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderChoiceBlock: (subscription) => dispatch(renderChoiceBlock(subscription))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundLobby)
