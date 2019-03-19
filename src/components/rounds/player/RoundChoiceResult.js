import React, { Component } from 'react'
import { connect } from 'react-redux'
import RoundChoiceCorrect from './RoundChoiceCorrect'
import RoundChoiceIncorrect from './RoundChoiceIncorrect'

class RoundChoiceResult extends Component {
  render() {
    return(
      <h1>Choice Results</h1>
    )
  }
}

export default connect()(RoundChoiceResult)
