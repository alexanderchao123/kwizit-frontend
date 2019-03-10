import React, { Component } from 'react'

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
      <div>
        <h2>Join A Round</h2>
        <form onSubmit={this.submitHandler}>
          <div><input type="text" name="pin" value={this.state.pin} placeholder="Enter Pin" onChange={this.changeHandler}/></div>
          <div><button type="submit">Enter</button></div>
        </form>
      </div>
    )
  }
}

export default RoundJoin
