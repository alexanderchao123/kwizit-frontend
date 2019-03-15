import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionCable from 'actioncable'
import { addPlayer, getPlayers } from '../store/actions/RoundActions'
import RoundLobby from '../components/rounds/host/RoundLobby'
import RoundQuestionBlock from '../components/rounds/host/RoundQuestionBlock'
import RoundQuestionResult from '../components/rounds/host/RoundQuestionResult'
import RoundScoreboard from '../components/rounds/host/RoundScoreboard'
import RoundGameOver from '../components/rounds/host/RoundGameOver'

class RoundHostContainer extends Component {
  constructor() {
    super()
    this.state = {
      cable: {},
      subscription: {}
    }
  }

  authenticateRound = (roundPin) => {
    return fetch(`http://localhost:3000/api/v1/authenticate_round/${roundPin}`)
    .then(res => res.json())
  }

  createSocket = (roundPin) => {
    let cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.getItem("token")}`)
    let subscription = cable.subscriptions.create({ channel: "RoundsChannel", round_pin: roundPin }, {
      connected: function() {},
      disconnect: function() {},
      received: (response) => {
        switch (response.type) {
          case "Host Connected":
            console.log(response.type)
            break
          case "Player Connected":
            this.props.addPlayer(response.data)
        }
      },
      renderChoiceBlock: function() {
        this.perform("render_choice_block")
      },
      renderChoiceResult: function() {
        this.perform("render_choice_result")
      }
    })
    this.setState({
      cable: cable,
      subscription: subscription
    })
  }

  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/host/:pin/lobby" render={(props) => <RoundLobby {...props} subscription={this.state.subscription}/>}/>
          <Route path="/rounds/host/:pin/questionblock" render={(props) => <RoundQuestionBlock {...props} subscription={this.state.subscription}/>}/>}/>
          <Route path="/rounds/host/:pin/questionresult" render={(props) => <RoundQuestionResult {...props}/>}/>
          <Route path="/rounds/host/:pin/scoreboard" render={(props) => <RoundScoreboard {...props} subscription={this.state.subscription}/>}/>
          <Route path="/rounds/host/:pin/gameover" render={(props) => <RoundGameOver {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    this.authenticateRound(roundPin)
    .then(() => {
      this.createSocket(roundPin)
      this.props.getPlayers(roundPin, token)
    })
  }

  componentWillUnmount() {
    this.state.subscription.consumer.disconnect()
    // clear the  redux and local state
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.roundInfo.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPlayer: (player) => dispatch(addPlayer(player)),
    getPlayers: (roundPin, token) => dispatch(getPlayers(roundPin, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundHostContainer)
