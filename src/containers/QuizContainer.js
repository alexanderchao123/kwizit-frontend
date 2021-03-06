import React, { Component, Fragment } from 'react'
import { Switch, Route} from 'react-router-dom'
import QuizNew from '../components/quizzes/QuizNew'
import QuizShow from '../components/quizzes/QuizShow'
import QuizIndex from '../components/quizzes/QuizIndex'

class QuizContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/quizzes/new" render={(props) => <QuizNew {...props}/>}/>
          <Route path="/quizzes/:quizId" render={(props) => <QuizShow {...props}/>}/>
          <Route path="/quizzes" render={(props) => <QuizIndex {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default QuizContainer
