import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentQuestion } from '../../store/actions/RoundActions'
import RoundGameOver from './RoundGameOver'

class RoundQuestionBlock extends Component {
  clickHandler = (event) => {
    let roundPin = this.props.match.params.pin
    this.props.history.push(`/rounds/${roundPin}/questionresult`)
  }

  countdownQuestion = () => {
    setTimeout(() => {
      let roundPin = this.props.match.params.pin
      this.props.history.push(`/rounds/${roundPin}/questionresult`)
    }, 10000)
  }

  render() {
    return(
      <div>
        {this.props.lastQuestion ? (
          <RoundGameOver/>
        ) : (
          <div>
            <h1>QuestionBlock</h1>
            <h4>{this.props.question.title}</h4>
            <button type="button" onClick={this.clickHandler}>Skip</button>
          </div>
        )}
      </div>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    this.props.getCurrentQuestion(roundPin, token)
    this.countdownQuestion()
  }
}

const mapStateToProps = (state) => {
  return {
    question: state.roundInfo.question,
    lastQuestion: state.roundInfo.lastQuestion
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentQuestion: (roundPin, token) => dispatch(getCurrentQuestion(roundPin, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundQuestionBlock)
