import React, { Component } from 'react'
import QuestionNew from '../questions/QuestionNew'

class QuizNew extends Component {
  constructor() {
    super()
    this.state = {
      title: "",
      description: "",
      questions_attributes: []
    }
  }

  createQuiz = () => {
    let token = localStorage.getItem("token")
    fetch("http://localhost:3000/api/v1/quizzes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({quiz: this.state})
    })
    .then(res => res.json())
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.createQuiz()
  }

  clickHandler = (event) => {
    let question = {
      title: "",
      difficulty: "",
      time: 30,
    }

    this.setState({
      questions_attributes: [...this.state.questions_attributes, question]
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <h1>Quiz Form</h1>
        <form onSubmit={this.submitHandler}>
          <div><input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/></div>
          <div><textarea type="textarea" name="description" placeholder="Description" value={this.state.description} onChange={this.changeHandler}></textarea></div>
          <button type="button" onClick={this.clickHandler}>Add Question</button>
          <button type="submit">Create Quiz</button>
        </form>
      </div>
    )
  }
}

export default QuizNew
