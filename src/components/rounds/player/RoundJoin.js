import React, { Component } from 'react'
import RoundJoinBody from './elements/RoundJoinBody'
import RoundJoinFormWrapper from './elements/RoundJoinFormWrapper'
import RoundJoinForm from './elements/RoundJoinForm'
import RoundJoinHeader from './elements/RoundJoinHeader'
import RoundInput from './elements/RoundInput'
import RoundSubmitButton from './elements/RoundSubmitButton'

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
      <RoundJoinBody>
        <RoundJoinFormWrapper>
          <RoundJoinForm onSubmit={this.submitHandler}>
            <RoundJoinHeader>Join A Round</RoundJoinHeader>
            <RoundInput
              type="text"
              name="pin"
              value={this.state.pin}
              placeholder="Enter Pin"
              onChange={this.changeHandler}
            />
            <RoundSubmitButton>Join</RoundSubmitButton>
          </RoundJoinForm>
        </RoundJoinFormWrapper>
      </RoundJoinBody>
    )
  }
}

export default RoundJoin
