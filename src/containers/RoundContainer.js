import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import RoundPlayerContainer from './RoundPlayerContainer'
import RoundHostContainer from './RoundHostContainer'

class RoundContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/player" render={(props) => <RoundPlayerContainer {...props}/>}/>
          <Route path="/rounds/host" render={(props) => <RoundHostContainer {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default RoundContainer
