import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentQuestion } from '../../store/actions/RoundActions'

class RoundQuestionBlock extends Component {
  render() {
    return(
      <h1>QuestionBlock</h1>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    this.props.getCurrentQuestion(roundPin)
  }
}

const mapStateToProps = (state) => {
  return {
    question: state.roundInfo.current_question
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentQuestion: (roundPin) => dispatch(getCurrentQuestion(roundPin))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundQuestionBlock)
