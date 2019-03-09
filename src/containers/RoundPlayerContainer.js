import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import RoundJoin from '../components/rounds/RoundJoin'

class RoundPlayerContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/player/join" render={(props) => <RoundJoin {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default RoundPlayerContainer
