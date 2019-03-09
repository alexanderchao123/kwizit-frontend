import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import ActionCable from 'actioncable'
import { connect } from 'react-redux'
import { addPlayer } from '../store/actions/RoundActions'
import RoundLobby from '../components/rounds/RoundLobby'
import RoundQuestionBlock from '../components/rounds/RoundQuestionBlock'
import RoundQuestionResult from '../components/rounds/RoundQuestionResult'
import RoundScoreboard from '../components/rounds/RoundScoreboard'
import RoundGameOver from '../components/rounds/RoundGameOver'

class RoundHostContainer extends Component {
  constructor() {
    super()
    this.state = {
      cable: {},
      socket: {}
    }
  }

  authenticateRound = (roundPin) => {
    return fetch(`http://localhost:3000/api/v1/authenticate_round/${roundPin}`)
    .then(res => {
      return res.json()
    })
  }

  createSocket = (roundPin) => {
    let cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.getItem("token")}`)
    let socket = cable.subscriptions.create({ channel: "RoundsChannel", round_pin: roundPin}, {
      connected: function() {},
      disconnect: function() {},
      received: (response) => {
        switch (response.type) {
          case "Successfully Connected":
            this.props.addPlayer(response.data)
            break
          default:
            console.log("Connected")
        }
      },
      speak: function() {}
    })
    this.setState({
      cable: cable,
      socket: socket
    })
  }

  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/host/:pin/lobby" render={(props) => <RoundLobby {...props}/>}/>
          <Route path="/rounds/host/:pin/questionblock" render={(props) => <RoundQuestionBlock {...props}/>}/>
          <Route path="/rounds/host/:pin/questionresult" render={(props) => <RoundQuestionResult {...props}/>}/>
          <Route path="/rounds/host/:pin/scoreboard" render={(props) => <RoundScoreboard {...props}/>}/>
          <Route path="/rounds/host/:pin/gameover" render={(props) => <RoundGameOver {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    this.authenticateRound(roundPin)
    .then(this.createSocket(roundPin))
  }

  componentWillUnmount() {
    // disconnect the socket connection
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.roundInfo.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: (player) => dispatch(addPlayer(player))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundHostContainer)
