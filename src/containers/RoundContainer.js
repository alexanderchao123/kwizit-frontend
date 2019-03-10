import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import RoundHostContainer from './RoundHostContainer'
import RoundPlayerContainer from './RoundPlayerContainer'
import RoundJoin from '../components/rounds/player/RoundJoin'

class RoundContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/join" render={(props) => <RoundJoin {...props}/>}/>
          <Route path="/rounds/host/:pin" render={(props) => <RoundHostContainer {...props}/>}/>
          <Route path="/rounds/player/:pin" render={(props) => <RoundPlayerContainer {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default RoundContainer
