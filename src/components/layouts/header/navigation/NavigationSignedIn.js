import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { removeUser } from '../../../../store/actions/UserActions';
import NavigationAppBar from './elements/NavigationAppBar'
import NavigationToolbar from './elements/NavigationToolbar'
import NavigationTypography from './elements/NavigationTypography'
import NavigationUnorderedList from './elements/NavigationUnorderedList'
import NavigationList from './elements/NavigationList'
import NavigationLink from './elements/NavigationLink'

class NavSignedIn extends Component {
  clickHandler = (event) => {
    this.props.removeUser()
    localStorage.removeItem("token")
  }

  render() {
    return(
      <NavigationAppBar position="static">
        <NavigationToolbar>
          <NavigationTypography>
            <NavigationList>
              <NavigationLink to="/">Kwizit</NavigationLink>
            </NavigationList>
          </NavigationTypography>
          <NavigationUnorderedList>
            <NavigationList>
              <NavigationLink to="/quizzes">Explore Quizzes</NavigationLink>
            </NavigationList>
            <NavigationList>
              <NavigationLink to="/quizzes/new">Create Quiz</NavigationLink>
            </NavigationList>
            <NavigationList>
              <NavigationLink to="/rounds/join">Join Game</NavigationLink>
            </NavigationList>
            <NavigationList onClick={this.clickHandler}>
              <NavigationLink to="/users/signout">Sign Out</NavigationLink>
            </NavigationList>
          </NavigationUnorderedList>
        </NavigationToolbar>
      </NavigationAppBar>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeUser())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NavSignedIn))
