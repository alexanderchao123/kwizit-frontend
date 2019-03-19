import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
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

  componentDidMount() {}
}

const mapStateToProps = (state) => {
  return {
    decision: state.roundInfo.decision
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundChoiceResult)
