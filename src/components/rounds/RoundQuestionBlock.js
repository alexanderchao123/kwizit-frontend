import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentQuestion, decrementTime } from '../../store/actions/RoundActions'
import RoundGameOver from './RoundGameOver'

class RoundQuestionBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      setIntervalId: 0
    }
  }

  pushQuestionResultRoute = () => {
    let roundPin = this.props.match.params.pin
    this.props.history.push(`/rounds/${roundPin}/questionresult`)
  }

  startCountdownTimer = () => {
    return setInterval(() => {
      if (this.props.question.time === 0 && !this.props.lastQuestion) this.pushQuestionResultRoute()
      console.log(this.props.question.time)
      this.props.decrementTime()
    }, 1000)
  }

  stopCountdownTimer = () => {
    clearInterval(this.state.setIntervalId)
  }

  clickHandler = (event) => {
    this.pushQuestionResultRoute()
  }

  render() {
    return(
      <div>
        <h1>QuestionBlock</h1>
        <h4>{this.props.question.title}</h4>
        <div>{this.props.question.time}</div>
        <button type="button" onClick={this.clickHandler}>Skip</button>
      </div>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    this.props.getCurrentQuestion(roundPin, token)

    let setIntervalId = this.startCountdownTimer()
    this.setState({setIntervalId: setIntervalId})
  }

  componentWillUnmount() {
    this.stopCountdownTimer()
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
    getCurrentQuestion: (roundPin, token) => dispatch(getCurrentQuestion(roundPin, token)),
    decrementTime: () => dispatch(decrementTime())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundQuestionBlock)
