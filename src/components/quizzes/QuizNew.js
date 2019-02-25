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
      <h1>
        Quiz Form
      </h1>
    )
  }
}

export default QuizNew
