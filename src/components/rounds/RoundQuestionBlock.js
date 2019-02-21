import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestion } from '../../store/actions/RoundActions'

class RoundQuestionBlock extends Component {
  clickHandler = (event) => {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    this.props.getQuestion(roundPin, token)
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <h1>QuestionBlock</h1>
        <h4>{this.props.question.title}</h4>
        <button type="button" onClick={this.clickHandler}>Next Question</button>
      </div>
    )
  }

  componentDidMount() {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    this.props.getQuestion(roundPin, token)
  }
}

const mapStateToProps = (state) => {
  return {
    question: state.roundInfo.question
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestion: (roundPin, token) => dispatch(getQuestion(roundPin, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundQuestionBlock)
