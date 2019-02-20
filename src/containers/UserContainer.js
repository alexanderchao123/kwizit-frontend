import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import UserSignUp from '../components/users/UserSignUp'
import UserSignIn from '../components/users/UserSignIn'
import UserDashboard from '../components/users/UserDashboard'

class UserContainer extends Component {
  render() {
    return(
      <Fragment>
        <Switch>
          <Route path="/users/signup" render={(props) => <UserSignUp {...props}/>}/>
          <Route path="/users/signin" render={(props) => <UserSignIn {...props}/>}/>
          <Route path="/users/dashboard" render={(props) => <UserDashboard {...props}/>}/>
        </Switch>
      </Fragment>
    )
  }
}

export default UserContainer
