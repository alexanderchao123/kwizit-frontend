import React, { Component } from 'react'
import RoundBody from '../elements/RoundBody'
import RoundFormWrapper from '../elements/RoundFormWrapper'
import RoundForm from '../elements/RoundForm'
import RoundHeader from '../elements/RoundHeader'
import RoundInput from '../elements/RoundInput'
import RoundSubmitButton from '../elements/RoundSubmitButton'

class RoundJoin extends Component {
  constructor() {
    super()
    this.state = {
      pin: ""
    }
  }

  authenticateRound = (roundPin) => {
    return fetch(`http://localhost:3000/api/v1/authenticate_round/${roundPin}`)
    .then(res => res.json())
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    let roundPin = this.state.pin
    this.authenticateRound(roundPin)
    .then(json => this.props.history.push(`/rounds/player/${roundPin}/instructions`))
  }

  render() {
    return (
      <RoundBody>
        <RoundFormWrapper>
          <RoundForm onSubmit={this.submitHandler}>
            <RoundHeader>Join A Round</RoundHeader>
            <RoundInput
              type="text"
              name="pin"
              value={this.state.pin}
              placeholder="Enter Pin"
              onChange={this.changeHandler}
            />
            <RoundSubmitButton>Join</RoundSubmitButton>
          </RoundForm>
        </RoundFormWrapper>
      </RoundBody>
    )
  }
}

export default RoundJoin
