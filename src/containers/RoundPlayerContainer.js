import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionCable from 'actioncable'
import RoundInstructions from '../components/rounds/player/RoundInstructions'
import RoundChoiceBlock from '../components/rounds/player/RoundChoiceBlock'
import RoundChoiceResult from '../components/rounds/player/RoundChoiceResult'
import RoundRanking from '../components/rounds/player/RoundRanking'

class RoundPlayerContainer extends Component {
  constructor() {
    super()
    this.state = {
      cable: {},
      socket: {}
    }
  }

  authenticateRound = (roundPin) => {
    return fetch(`http://localhost:3000/api/v1/authenticate_round/${roundPin}`)
    .then(res => res.json())
  }

  createSocket = (roundPin) => {
    let cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.getItem("token")}`)
    let socket = cable.subscriptions.create({ channel: "RoundsChannel", round_pin: roundPin}, {
      connected: function() {},
      disconnect: function() {},
      received: (response) => {
        switch (response.type) {
          case "Successfully Connected":
            console.log(response.type)
            break
          case "Render Choice Block":
            this.props.history.push(`/rounds/player/${this.props.match.params.pin}/choiceblock`)
            break
          case "Render Choice Result":
            this.props.history.push(`/rounds/player/${this.props.match.params.pin}/choiceresult`)
            break
          default:
            console.log("Connected")
        }
      },
      submitChoice: function(choice) {
        this.perform("submit_choice", choice)
      }
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
          <Route path="/rounds/player/:pin/instructions" render={(props) => <RoundInstructions {...props}/>}/>
          <Route path="/rounds/player/:pin/choiceblock" render={(props) => <RoundChoiceBlock {...props}/>}/>
          <Route path="/rounds/player/:pin/choiceresult" render={(props) => <RoundChoiceResult {...props}/>}/>
          <Route path="/rounds/player/:pin/ranking" render={(props) => <RoundRanking {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    this.authenticateRound(roundPin)
    .then(() => this.createSocket(roundPin))
  }

  componentWillUnmount() {
    // disconnect the socket connection
  }
}

export default RoundPlayerContainer
