import React, { Component } from 'react'

class RoundQuestionResult extends Component {
  clickHandler = (event) => {
    let roundPin = this.props.match.params.pin
    this.props.history.push(`/rounds/host/${roundPin}/scoreboard`)
  }

  render() {
    return(
      <div>
        <h1>Round Question Result</h1>
        <button onClick={this.clickHandler}>Next</button>
      </div>
    )
  }

  componentDidMount() {
    // dispatch a thunk action to request the round_questions
  }
}

export default RoundQuestionResult
