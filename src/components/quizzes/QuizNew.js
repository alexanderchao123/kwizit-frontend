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

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <div>
        <h1>Quiz Form</h1>
        <form>
          <div><input type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.changeHandler}/></div>
          <div><textarea type="textarea" name="description" placeholder="Description" value={this.state.description} onChange={this.changeHandler}></textarea></div>
          <button type="submit">Create Quiz</button>
        </form>
      </div>
    )
  }
}

export default QuizNew
