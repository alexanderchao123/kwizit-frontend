import React, { Component, Fragment } from 'react'
import QuizDisplay from './QuizDisplay'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getQuizzes, removeQuizzes } from '../../store/actions/QuizActions'

class QuizIndex extends Component {
  renderQuizDisplay = () => {
    return this.props.quizzes.map((quiz) => {
      return <QuizDisplay key={quiz.id} quiz={quiz}/>
    })
  }

  render() {
    return(
      <Fragment>
        <h1>Quizzes</h1>
        {this.renderQuizDisplay()}
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
