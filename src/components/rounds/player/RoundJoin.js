import React, { Component } from 'react'
import RoundJoinBody from './elements/RoundJoinBody'
import RoundJoinFormWrapper from './elements/RoundJoinFormWrapper'
import RoundInput from './elements/RoundInput'
import RoundSubmitButton from './elements/RoundSubmitButton'
import styled from 'styled-components'

// const RoundJoinBody = styled.div`
//   width: 100%;
//   height: 100%;
//   background: #FFF1E6;
// `

// const FormWrapper = styled.div`
//   width: 350px;
//   height: 500px;
//   margin: auto;
//   padding: 50px 0px;
//   display: table;
// `

const StyledForm = styled.form`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`

const StyledHeader = styled.h1`
  color: #7C5CFF;
  margin-bottom: 25px;
  font-size: 35px;
`

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
          <StyledForm onSubmit={this.submitHandler}>
            <StyledHeader>Join A Round</StyledHeader>
            <RoundInput
              type="text"
              name="pin"
              value={this.state.pin}
              placeholder="Enter Pin"
              onChange={this.changeHandler}
            />
            <RoundSubmitButton>Join</RoundSubmitButton>
          </StyledForm>
        </RoundJoinFormWrapper>
      </RoundJoinBody>
    )
  }
}

export default RoundJoin
