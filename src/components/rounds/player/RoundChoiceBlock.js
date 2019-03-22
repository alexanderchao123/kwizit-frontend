import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createOrFindDecision } from '../../../store/actions/RoundPlayerActions'

class RoundChoiceBlock extends Component {
  clickHandler = (event) => {
    let option = {
      choice: event.target.value,
      roundPin: this.props.round.pin,
      token: localStorage.getItem("token")
    }
    this.props.createOrFindDecision(option)
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

const mapStateToProps = (state) => {
  return {
    round: state.roundPlayerInfo.round
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createOrFindDecision: (options) => dispatch(createOrFindDecision(options))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundChoiceBlock)
