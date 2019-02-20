import React, { Component, Fragment } from 'react'
import { Switch, Route} from 'react-router-dom'
import QuizIndex from '../components/quizzes/QuizIndex'
import QuizShow from '../components/quizzes/QuizShow'

class QuizContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/quizzes/:quizId" render={(props) => <QuizShow {...props}/>}/>
          <Route path="/quizzes" render={(props) => <QuizIndex {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default QuizContainer
