import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion } from '../../store/actions/RoundActions'

class RoundQuestionBlock extends Component {
  constructor() {
    super()
    this.state = {
      title: ""
    }
  }

  clickHandler = (event) => {
    this.getQuestion()
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
        <h4>{this.state.title}</h4>
        <button type="button" onClick={this.clickHandler}>Next Question</button>
      </div>
    )
  }

  componentDidMount() {
    this.getQuestion()
  }
}

const mapStateToProps = (state) => {
  return {
    question: state.roundInfo.question
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addQuestion: (question) => dispatch(addQuestion(question))
  }
}

export default connect(null, mapDispatchToProps)(RoundQuestionBlock)
