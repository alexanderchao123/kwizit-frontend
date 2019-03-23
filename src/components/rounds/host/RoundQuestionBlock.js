import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createOrFindRoundQuestion, updateRoundQuestion, decrementTime, renderChoiceResult } from '../../../store/actions/RoundHostActions'

class RoundQuestionBlock extends Component {
  constructor() {
    super()
    this.state = {
      intervalId: 0
    }
  }

  transitionToQuestionResult = () => {
    let roundPin = this.props.round.pin
    this.props.history.push(`/rounds/host/${roundPin}/questionresult`)
    this.props.renderChoiceResult(this.props.subscription)
  }

  startCountdown = () => {
    let intervalId = setInterval(() => {
      if (this.props.question.time === 0) {
        let options = {
          roundPin: this.props.round.pin,
          roundQuestionId: this.props.round_question.id,
          token: localStorage.getItem("token"),
        }
        this.props.updateRoundQuestion(options)
        .then(json => this.transitionToQuestionResult())
      }
      this.props.decrementTime()
    }, 1000)
    this.setState({intervalId: intervalId})
  }

  stopCountdown = () => {
    clearInterval(this.state.intervalId)
  }

  clickHandler = (event) => {
    let roundPin = this.props.round.pin
    let roundQuestionId = this.props.round_question.id
    let token = localStorage.getItem("token")
    this.props.updateRoundQuestion(roundPin, roundQuestionId, token)
    .then(json => this.transitionToQuestionResult())
  }

  render() {
    return(
      <div>
        <h1>QuestionBlock</h1>
        <h4>{this.props.question.title}</h4>
        <h4>{this.props.question.time}</h4>
        <div>Choice A: {this.props.question.choices[0].answer}</div>
        <div>Choice B: {this.props.question.choices[1].answer}</div>
        <div>Choice C: {this.props.question.choices[2].answer}</div>
        <div>Choice D: {this.props.question.choices[3].answer}</div>
        <button type="button" onClick={this.clickHandler}>Skip</button>
      </div>
    )
  }

  componentDidMount() {
    let options = {
      roundPin: this.props.match.params.pin,
      token: localStorage.getItem("token")
    }
    this.props.createOrFindRoundQuestion(options)
    .then(() => this.startCountdown())
  }

  componentWillUnmount() {
    this.stopCountdown()
  }
}

const mapStateToProps = (state) => {
  return {
    round: state.roundHostInfo.round,
    round_question: state.roundHostInfo.round_question,
    question: state.roundHostInfo.round_question.question
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createOrFindRoundQuestion: (options) => dispatch(createOrFindRoundQuestion(options)),
    updateRoundQuestion: (roundPin, token) => dispatch(updateRoundQuestion(roundPin, token)),
    decrementTime: () => dispatch(decrementTime()),
    renderChoiceResult: (subscription) => dispatch(renderChoiceResult(subscription))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundQuestionBlock)
