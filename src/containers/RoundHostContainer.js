import React, { Component, Fragment } from 'react'
import {Switch, Route} from 'react-router-dom'
import ActionCable from 'actioncable'
import RoundLobby from '../components/rounds/RoundLobby'
import RoundQuestionBlock from '../components/rounds/RoundQuestionBlock'
import RoundQuestionResult from '../components/rounds/RoundQuestionResult'
import RoundScoreboard from '../components/rounds/RoundScoreboard'
import RoundGameOver from '../components/rounds/RoundGameOver'

class RoundHostContainer extends Component {
  authenticateRound = (roundPin) => {
    console.log("Authenticating")
    return fetch(`http://localhost:3000/api/v1/authenticate_round/${roundPin}`)
    .then(res => res.json())
  }

  createSocket = (roundPin) => {
    console.log("Connecting")
    let cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.getItem("token")}`)
    let group = cable.subscriptions.create({ channel: "RoundsChannel", round_pin: roundPin}, {
      connected: function() {
        console.log("Connected")
      },
      disconnect: function() {},
      received: (data) => {},
      speak: function() {}
    })
  }

  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/:pin/lobby" render={(props) => <RoundLobby {...props}/>}/>
          <Route path="/rounds/:pin/questionblock" render={(props) => <RoundQuestionBlock {...props}/>}/>
          <Route path="/rounds/:pin/questionresult" render={(props) => <RoundQuestionResult {...props}/>}/>
          <Route path="/rounds/:pin/scoreboard" render={(props) => <RoundScoreboard {...props}/>}/>
          <Route path="/rounds/:pin/gameover" render={(props) => <RoundGameOver {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    // authenticate round
    // create ws connection
    this.authenticateRound(roundPin)
    .then(this.createSocket)
  }
}

export default RoundHostContainer
