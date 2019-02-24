import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import RoundLobby from '../components/rounds/RoundLobby'
import RoundQuestionBlock from '../components/rounds/RoundQuestionBlock'
import RoundQuestionResult from '../components/rounds/RoundQuestionResult'

class RoundContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/:pin/lobby" render={(props) => <RoundLobby {...props}/>}/>
          <Route path="/rounds/:pin/questionblock" render={(props) => <RoundQuestionBlock {...props}/>}/>
          <Route path="/rounds/:pin/questionresult" render={(props) => <RoundQuestionResult {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default RoundContainer
