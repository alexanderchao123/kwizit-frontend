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
      choices_attributes: [
        {answer: "", correct: false},
        {answer: "", correct: false},
        {answer: "", correct: false},
        {answer: "", correct: false}
      ]
    }
  }

  addQuestion = () => {
    let newQuestion = this.newQuestion()
    this.setState({
      questions_attributes: [...this.state.questions_attributes, newQuestion]
    })
  }

  removeQuestion = (event, index) => {
    let questions = this.state.questions_attributes.filter((question, questionIndex) => {
      return questionIndex !== index
    })
    this.setState({
      questions_attributes: questions
    })
  }

  quizChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  questionChangeHandler = (event, questionIndex) => {
    let questions = this.state.questions_attributes.map((question, index) => {
      return (index === questionIndex) ? ({...question, [event.target.name]: event.target.value}) : (question)
    })
    this.setState({
      questions_attributes: questions
    })
  }

  choiceChangeHandler = (event, questionIndex, choiceIndex) => {
    let questions = this.state.questions_attributes.map((question, qIndex) => {
      if (qIndex === questionIndex) {
        let choices = question.choices_attributes.map((choice, cIndex) => {
          if (cIndex === choiceIndex && event.target.type === "text") {
            return {...choice, [event.target.name]:  event.target.value}
          } else if (cIndex === choiceIndex && event.target.type === "checkbox") {
            return {...choice, [event.target.name]:  event.target.checked}
          } else {
            return choice
          }
        })
        return {...question, choices_attributes: choices}
      } else {
        return question
      }
    })
    this.setState({questions_attributes: questions})
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
    .then(json => this.props.history.push(`/quizzes/${json.quiz.id}/`))
  }

  render() {
    let questions = this.state.questions_attributes.map((question, index) => {
      return <QuestionNew key={index} index={index} question={question} questionChangeHandler={this.questionChangeHandler} removeQuestion={this.removeQuestion} choiceChangeHandler={this.choiceChangeHandler}/>
    })

    return(
      <div>
        <h1>Quiz Form</h1>
        <form onSubmit={this.submitHandler}>
          <div><input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.quizChangeHandler}/></div>
          <div><input type="text" name="description" value={this.state.description} placeholder="Description" onChange={this.quizChangeHandler}></input></div>
          {questions}
          <button type="button" onClick={this.clickHandler}>Add Question</button>
          <button type="submit">Create Quiz</button>
        </form>
      </div>
    )
  }
}

export default QuizNew
