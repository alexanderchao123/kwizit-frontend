import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { submitChoice } from '../../../store/actions/RoundActions'

class RoundChoiceBlock extends Component {
  clickHandler = (event) => {
    // post fetch request the clicked value to the decisions controller
    // based on the returned response.type, it will either direct the user to the ChoiceSent or ChoiceResult
    let choice = event.target.value
    this.props.submitChoice(this.props.socket, choice)
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
    submitChoice: (socket, choice) => dispatch(submitChoice(socket, choice))
  }
}

export default connect(null, mapDispatchToProps)(RoundChoiceBlock)
