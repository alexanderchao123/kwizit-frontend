import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createDecision } from '../../../store/actions/RoundActions'

class RoundChoiceBlock extends Component {
  clickHandler = (event) => {
    let choice = event.target.value
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    this.props.createDecision(choice, roundPin, token)
  }

  render() {
    return(
      <Fragment>
        <h1>Choice Block</h1>
        <button type="button" value="0" onClick={this.clickHandler}>A</button>
        <button type="button" value="1" onClick={this.clickHandler}>B</button>
        <button type="button" value="2" onClick={this.clickHandler}>C</button>
        <button type="button" value="3" onClick={this.clickHandler}>D</button>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDecision: (choice, roundPin, token) => dispatch(createDecision(choice, roundPin, token))
  }
}

export default connect(null, mapDispatchToProps)(RoundChoiceBlock)
