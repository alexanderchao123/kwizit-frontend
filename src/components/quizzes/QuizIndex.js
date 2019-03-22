import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getQuizzes, removeQuizzes } from '../../store/actions/QuizActions'
import QuizDisplay from './QuizDisplay'

class QuizIndex extends Component {
  renderQuizDisplay = () => {
    return this.props.quizzes.map((quiz) => {
      return <li><QuizDisplay key={quiz.id} quiz={quiz}/></li>
    })
  }

  render() {
    return(
      <Fragment>
        <h1>Quizzes</h1>
        <ul>
          {this.renderQuizDisplay()}
        </ul>
      </Fragment>
    )
  }

  componentDidMount() {
    this.props.getQuizzes()
  }

  componentWillUnmount() {
    this.props.removeQuizzes()
  }
}

const mapStateToProps = (state) => {
  return {
    quizzes: state.quizInfo.quizzes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuizzes: () => dispatch(getQuizzes()),
    removeQuizzes: () => dispatch(removeQuizzes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizIndex)
