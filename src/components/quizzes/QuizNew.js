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

  newQuestion = () => {
    return {
      title: "",
      difficulty: "",
      time: 30,
    }
  }

  addQuestion = () => {
    let newQuestion = this.newQuestion()
    this.setState({
      questions_attributes: [...this.state.questions_attributes, newQuestion]
    })
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clickHandler = (event) => {
    this.addQuestion()
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.createQuiz()
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

  render() {
    let questions = this.state.questions_attributes.map((question, index) => {
      return <QuestionNew key={index} question={question} />
    })

    return(
      <div>
        <h1>Quiz Form</h1>
        <form onSubmit={this.submitHandler}>
          <div><input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/></div>
          <div><textarea type="textarea" name="description" placeholder="Description" value={this.state.description} onChange={this.changeHandler}></textarea></div>
          {questions}
          <button type="button" onClick={this.clickHandler}>Add Question</button>
          <button type="submit">Create Quiz</button>
        </form>
      </div>
    )
  }
}

export default QuizNew
