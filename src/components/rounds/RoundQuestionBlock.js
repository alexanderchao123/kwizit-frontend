import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCurrentQuestion, decrementTime } from '../../store/actions/RoundActions'
import RoundGameOver from './RoundGameOver'

class RoundQuestionBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      interval: ""
    }
  }

  clickHandler = (event) => {
    let roundPin = this.props.match.params.pin
    this.props.history.push(`/rounds/${roundPin}/questionresult`)
  }

  countdownQuestion = () => {
    setInterval(() => {
      if (this.props.question.time === 0) {
        let roundPin = this.props.match.params.pin
        this.props.history.push(`/rounds/${roundPin}/questionresult`)
      }
      console.log(this.props.question.time)
      this.props.decrementTime()
    }, 1000)
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
            <div>{this.props.question.time}</div>
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
    let countdown = setInterval(() => {
      if (this.props.question.time === 0) {
        let roundPin = this.props.match.params.pin
        this.props.history.push(`/rounds/${roundPin}/questionresult`)
      }
      console.log(this.props.question.time)
      this.props.decrementTime()
    }, 1000)
    this.setState({countdown: countdown})
  }

  componentWillUnmount() {
    clearInterval(this.state.countdown)
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
