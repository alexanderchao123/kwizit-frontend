import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getQuiz } from '../../store/actions/QuizActions'

class QuizShow extends Component {
  componentDidMount() {
    let quizId = this.props.match.params.quizId
    this.props.getQuiz(quizId)
  }

  render() {
    return(
      <Fragment>
        <h1>{this.props.quiz.title}</h1>
        <p>{this.props.quiz.description}</p>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quizInfo.current_quiz
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuiz: (quizId) => dispatch(getQuiz(quizId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizShow)
