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

  render() {
    return(
      <div>
        <h1>Quiz Form</h1>
        <form>
          <div><input type="text" name="title" placeholder="Title" value={this.state.title}/></div>
          <div><textarea type="textarea" name="description" placeholder="Description" value={this.state.description}></textarea></div>
          <button type="submit">Create Quiz</button>
        </form>
      </div>
    )
  }
}

export default QuizNew
