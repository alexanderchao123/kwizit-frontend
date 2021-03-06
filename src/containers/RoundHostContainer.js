import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { authenticateRound, addPlayer, getPlayers } from '../store/actions/RoundHostActions'
import ActionCable from 'actioncable'
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
      roundSubscription: {}
    }
  }

  createConnection = ({roundPin, token}) => {
    let cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${token}`)
    let roundSubscription = cable.subscriptions.create({ channel: "RoundsChannel", round_pin: roundPin }, {
      connected: () => {
        this.props.getPlayers({ roundPin: roundPin, token: token})
      },
      disconnect: function() {},
      received: (response) => {
        switch (response.type) {
          case "Host Connected":
            console.log(response.type)
            break
          case "Player Connected":
            this.props.getPlayers({ roundPin: roundPin, token: token})
            break
          case "Render Question Result":
            this.props.history.push(`/rounds/host/${roundPin}/questionresult`)
            break
          default:
            console.log("A message was sent")
        }
      },
      renderChoiceBlock: function() {
        this.perform("render_choice_block")
      },
      renderChoiceResult: function() {
        this.perform("render_choice_result")
      },
      renderRanking: function() {
        this.perform("render_ranking")
      }
    })
    this.setState({
      cable: cable,
      roundSubscription: roundSubscription
    })
  }

  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/host/:pin/lobby" render={(props) => <RoundLobby {...props} subscription={this.state.roundSubscription}/>}/>
          <Route path="/rounds/host/:pin/questionblock" render={(props) => <RoundQuestionBlock {...props} subscription={this.state.roundSubscription}/>}/>
          <Route path="/rounds/host/:pin/questionresult" render={(props) => <RoundQuestionResult {...props} hey="hey" subscription={this.state.roundSubscription}/>}/>
          <Route path="/rounds/host/:pin/scoreboard" render={(props) => <RoundScoreboard {...props} subscription={this.state.roundSubscription}/>}/>
          <Route path="/rounds/host/:pin/gameover" render={(props) => <RoundGameOver {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }

  componentDidMount() {
    let options = {
      roundPin: this.props.match.params.pin,
      token: localStorage.getItem("token")
    }
    this.props.authenticateRound(options)
    .then(() => this.createConnection(options))
  }

  componentWillUnmount() {
    this.state.roundSubscription.consumer.disconnect()

  }
}

const mapStateToProps = (state) => {
  return {
    round: state.roundHostInfo.round,
    players: state.roundHostInfo.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateRound: (roundPin, token) => dispatch(authenticateRound(roundPin, token)) ,
    addPlayer: (player) => dispatch(addPlayer(player)),
    getPlayers: (roundPin, token) => dispatch(getPlayers(roundPin, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundHostContainer)
