import React, { Component } from 'react'

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

  clickHandler = (event) => {
    event.preventDefault()
    this.createQuiz()
  }

  render() {
    return(
      <div>
        <h1>Quiz Form</h1>
        <form>
          <div><input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/></div>
          <div><textarea type="textarea" name="description" placeholder="Description" value={this.state.description} onChange={this.changeHandler}></textarea></div>
          <button type="submit" onClick={this.clickHandler}>Create Quiz</button>
        </form>
      </div>
    )
  }
}

export default QuizNew
