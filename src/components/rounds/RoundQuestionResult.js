import React, { Component } from 'react'
import { connect } from 'react-redux'

class RoundQuestionResult extends Component {
  clickHandler = (event) => {
    debugger
    // routes to current round's scoreboard
  }

  render() {
    return(
      <div>
        <h1>Round Question Result</h1>
        <button>Next</button>
      </div>
    )
  }

  componentDidMount() {
    // dispatch a thunk action to request the round_questions
  }
}

export default RoundQuestionResult
