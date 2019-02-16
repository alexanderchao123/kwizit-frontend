import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getQuiz } from '../../store/actions/QuizActions'
import { createRound } from '../../store/actions/RoundActions'

class QuizShow extends Component {
  clickHandler = (event) => {
    let quizId = this.props.match.params.quizId
    let token = localStorage.getItem("token")
    this.props.createRound(quizId, token)
  }

  componentDidMount() {
    let quizId = this.props.match.params.quizId
    this.props.getQuiz(quizId)
  }

  render() {
    return(
      <Fragment>
        <h1>{this.props.quiz.title}</h1>
        <p>{this.props.quiz.description}</p>
        <button type="button" onClick={this.clickHandler}>Play</button>
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
    getQuiz: (quizId) => dispatch(getQuiz(quizId)),
    createRound: (quizId, token) => dispatch(createRound(quizId, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizShow)
