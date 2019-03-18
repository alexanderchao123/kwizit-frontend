import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import ActionCable from 'actioncable'
import { authenticateRound } from '../store/actions/RoundActions'
import RoundInstructions from '../components/rounds/player/RoundInstructions'
import RoundChoiceBlock from '../components/rounds/player/RoundChoiceBlock'
import RoundChoiceSent from '../components/rounds/player/RoundChoiceSent'
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

  createSocket = (roundPin) => {
    let cable = ActionCable.createConsumer(`ws://localhost:3000/cable?token=${localStorage.getItem("token")}`)
    let subscription = cable.subscriptions.create({ channel: "RoundsChannel", round_pin: roundPin }, {
      connected: () => {},
      disconnect: () => {},
      received: (response) => {
        switch (response.type) {
          case "Host Connected":
            console.log(response.type)
            break
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
            break
          default:
            console.log("A message was sent")
        }
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
          <Route path="/rounds/player/:pin/choicesent" render={(props) => <RoundChoiceSent {...props}/>}/>
          <Route path="/rounds/player/:pin/choiceresult" render={(props) => <RoundChoiceResult {...props}/>}/>
          <Route path="/rounds/player/:pin/ranking" render={(props) => <RoundRanking {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    this.props.authenticateRound(roundPin, token)
    .then(() => this.createSocket(roundPin))
  }

  componentWillUnmount() {
    this.state.subscription.consumer.disconnect()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateRound: (roundPin, token) => dispatch(authenticateRound(roundPin, token))
  }
}

export default connect(null, mapDispatchToProps)(RoundPlayerContainer)
