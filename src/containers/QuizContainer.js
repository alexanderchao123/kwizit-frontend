import React, { Component, Fragment } from 'react'
import { Switch, Route} from 'react-router-dom'
import QuizIndex from '../components/quizzes/QuizIndex'
import QuizShow from '../components/quizzes/QuizShow'

class QuizContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/quizzes/:quizId" component={QuizShow}/>
          <Route path="/quizzes" component={QuizIndex}/>
        </Switch>
      </Fragment>
    )
  }
}

export default QuizContainer
