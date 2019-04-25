import React, { Component } from 'react';
import NavigationAppBar from './NavigationAppBar'
import NavigationToolbar from './NavigationToolbar'
import NavigationTypography from './NavigationTypography'
import NavigationUnorderedList from './NavigationUnorderedList'
import NavigationList from './NavigationList'
import NavigationLink from './NavigationLink'

class NavSignedOut extends Component {
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
              <NavigationLink to="/users/signup">Sign Up</NavigationLink>
            </NavigationList>
            <NavigationList>
              <NavigationLink to="/users/signin">Sign In</NavigationLink>
            </NavigationList>
          </NavigationUnorderedList>
        </NavigationToolbar>
      </NavigationAppBar>
    )
  }
}

export default NavSignedOut
