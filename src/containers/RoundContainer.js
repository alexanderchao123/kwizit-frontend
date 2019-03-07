import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import RoundJoin from '../components/rounds/RoundJoin'
import RoundLobby from '../components/rounds/RoundLobby'
import RoundQuestionBlock from '../components/rounds/RoundQuestionBlock'
import RoundQuestionResult from '../components/rounds/RoundQuestionResult'
import RoundScoreboard from '../components/rounds/RoundScoreboard'
import RoundGameOver from '../components/rounds/RoundGameOver'

class RoundContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/join" render={(props) => <RoundJoin {...props}/>}/>
          <Route path="/rounds/:pin/lobby" render={(props) => <RoundLobby {...props}/>}/>
          <Route path="/rounds/:pin/questionblock" render={(props) => <RoundQuestionBlock {...props}/>}/>
          <Route path="/rounds/:pin/questionresult" render={(props) => <RoundQuestionResult {...props}/>}/>
          <Route path="/rounds/:pin/scoreboard" render={(props) => <RoundScoreboard {...props}/>}/>
          <Route path="/rounds/:pin/gameover" render={(props) => <RoundGameOver {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default RoundContainer
