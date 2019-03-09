import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import RoundJoin from '../components/rounds/RoundJoin'
import RoundHostContainer from './RoundHostContainer'

class RoundContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/rounds/join" render={(props) => <RoundJoin {...props}/>}/>
          <Route path="/rounds/:pin" render={(props) => <RoundHostContainer {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default RoundContainer
