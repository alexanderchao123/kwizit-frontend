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
    let token = localStorage.getItem("token")
    this.props.getCurrentQuestion(roundPin, token)
  }
}

const mapStateToProps = (state) => {
  return {
    question: state.roundInfo.current_question
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentQuestion: (roundPin, token) => dispatch(getCurrentQuestion(roundPin, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundQuestionBlock)
