import React, { Component, Fragment } from 'react'
import {Switch, Route} from 'react-router-dom'
import ActionCable from 'actioncable'
import RoundLobby from '../components/rounds/RoundLobby'
import RoundQuestionBlock from '../components/rounds/RoundQuestionBlock'
import RoundQuestionResult from '../components/rounds/RoundQuestionResult'
import RoundScoreboard from '../components/rounds/RoundScoreboard'
import RoundGameOver from '../components/rounds/RoundGameOver'

class RoundHostContainer extends Component {
  constructor() {
    super()
    this.state = {
      app: {
        cable: {},
        group: {}
      }
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
    let group = cable.subscriptions.create({ channel: "RoundsChannel", round_pin: roundPin}, {
      connected: function() {},
      disconnect: function() {},
      received: (data) => {},
      speak: function() {}
    })
    this.setState({app: {cable: cable, group: group}})
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
    this.authenticateRound(roundPin)
    .then(this.createSocket(roundPin))
  }

  componentWillUnmount() {
    // disconnect the socket connection
  }
}

export default RoundHostContainer
