import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getQuiz, removeQuiz } from '../../store/actions/QuizActions'
import { createRound } from '../../store/actions/RoundHostActions'

class QuizShow extends Component {
  clickHandler = (event) => {
    let options = {
      quizId: this.props.quiz.id,
      token: localStorage.getItem("token")
    }
    this.props.createRound(options)
    .then(() => this.props.history.push(`/rounds/host/${this.props.round.pin}/lobby`))
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

  componentDidMount() {
    let options = {
      quizId: this.props.match.params.quizId
    }
    this.props.getQuiz(options)
  }

  componentWillUnmount() {
    this.props.removeQuiz()
  }
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quizInfo.quiz,
    round: state.roundHostInfo.round
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getQuiz: (quizId) => dispatch(getQuiz(quizId)),
    removeQuiz: () => dispatch(removeQuiz()),
    createRound: (quizId, token) => dispatch(createRound(quizId, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizShow)
