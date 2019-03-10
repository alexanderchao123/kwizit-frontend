import React, { Component } from 'react'

class RoundJoin extends Component {
  constructor() {
    super()
    this.state = {
      pin: ""
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    // authenticate round pin
    // then create socket connection
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
