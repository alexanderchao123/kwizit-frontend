import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getQuestion } from '../../store/actions/RoundActions'

class RoundQuestionBlock extends Component {
  constructor() {
    super()
    this.state = {
      title: ""
    }
  }

  clickHandler = (event) => {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    this.props.getQuestion(roundPin, token)
  }

  getQuestion = () => {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    fetch(`http://localhost:3000/api/v1/rounds/${roundPin}/current_question`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => {
      this.setState({title: json.question.title})
    })
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
