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
      connected: () => {},
      disconnect: () => {},
      received: (response) => {
        switch (response.type) {
          case "Player Connected":
            console.log(response.type)
            break
          case "Render Choice Block":
            this.props.history.push(`/rounds/player/${this.props.match.params.pin}/choiceblock`)
            break
          case "Render Choice Sent":
            this.props.history.push(`/rounds/player/${this.props.match.params.pin}/choicesent`)
            break
          case "Render Choice Result":
            this.props.history.push(`/rounds/player/${this.props.match.params.pin}/choiceresult`)
            break
          case "Render Ranking":
            this.props.history.push(`/rounds/player/${this.props.match.params.pin}/ranking`)
        }
      },
      submitChoice: function(choice) {
        this.perform("submit_choice", {choice: choice})
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
          <Route path="/rounds/player/:pin/instructions" render={(props) => <RoundInstructions {...props}/>}/>
          <Route path="/rounds/player/:pin/choiceblock" render={(props) => <RoundChoiceBlock {...props} subscription={this.state.subscription}/>}/>
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
    this.state.subscription.consumer.disconnect()
    // clear the  redux and local state
  }
}

export default RoundPlayerContainer
