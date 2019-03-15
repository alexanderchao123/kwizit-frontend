import React, { Component } from 'react'
import { connect } from 'react-redux'
import { renderChoiceBlock } from '../../../store/actions/RoundActions'

class RoundScoreboard extends Component {
  clickHandler = (event) => {
    let roundPin = this.props.match.params.pin
    this.props.renderChoiceBlock(this.props.subscription)
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

const mapDispatchToProps = (dispatch) => {
  return {
    renderChoiceBlock: (subscription) => dispatch(renderChoiceBlock(subscription))
  }
}

export default connect(null, mapDispatchToProps)(RoundScoreboard)
