import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getQuizzes } from '../../store/actions/QuizActions'

class QuizIndex extends Component {
  componentDidMount() {
    this.props.getQuizzes()
  }

  render() {
    let quizzes = this.props.quizzes.map((quiz) => (
      <Link to={`/quizzes/${quiz.id}`} key={quiz.id}>
        {quiz.title}
      </Link>
    ))

    return(
      <Fragment>
        <h1>Quizzes</h1>
        {quizzes}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    quizzes: state.quizInfo.quizzes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuizzes: () => dispatch(getQuizzes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizIndex)
