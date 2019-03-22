import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createOrFindDecision } from '../../../store/actions/RoundPlayerActions'
import RoundChoiceCorrect from './RoundChoiceCorrect'
import RoundChoiceIncorrect from './RoundChoiceIncorrect'

class RoundChoiceResult extends Component {
  render() {
    return(
      <Fragment>
        <h1>Choice Results</h1>
        {this.props.decision.correct ? <RoundChoiceCorrect/> : <RoundChoiceIncorrect/>}
      </Fragment>
    )
  }

  componentDidMount() {
    // let arg = {
    //   roundPin: this.props.match.params.pin,
    //   token: localStorage.getItem("token")
    // }
    // this.props.createOrFindDecision(arg)
  }
}

const mapStateToProps = (state) => {
  return {
    decision: state.roundPlayerInfo.decision
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createOrFindDecision: (arg) => dispatch(createOrFindDecision(arg))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundChoiceResult)
