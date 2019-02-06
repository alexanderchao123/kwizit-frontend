import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserSignUp from '../components/users/UserSignUp'
import UserSignIn from '../components/users/UserSignIn'
import UserDashboard from '../components/users/UserDashboard'

class UserContainer extends Component {
  render() {
    return(
      <div>
        <Switch>
          <Route path="/users/signup" component={UserSignUp}/>
          <Route path="/users/signin" component={UserSignIn}/>
          <Route path="/users/dashboard" component={UserDashboard}/>
        </Switch>
      </div>
    )
  }
}

export default UserContainer
