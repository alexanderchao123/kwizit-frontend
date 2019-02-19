import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class QuizDisplay extends Component {
  render() {
    return(
      <Link to={`/quizzes/${this.props.quiz.id}`} key={this.props.quiz.id}>
        {this.props.quiz.title}
      </Link>
    )
  }
}

export default QuizDisplay
