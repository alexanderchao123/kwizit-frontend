import React, { Component } from 'react'

class RoundScoreboard extends Component {
  clickHandler = (event) => {
    let roundPin = this.props.match.params.pin
    this.props.history.push(`/rounds/host/${roundPin}/questionblock`)
  }

  render() {
    return(
      <div>
        <h1>Scoreboard</h1>
        <button type="button" onClick={this.clickHandler}>Next</button>
      </div>
    )
  }
}

export default RoundScoreboard
