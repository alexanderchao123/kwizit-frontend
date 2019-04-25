import React, { Component } from 'react';
import NavigationAppBar from './elements/NavigationAppBar'
import NavigationToolbar from './elements/NavigationToolbar'
import NavigationTypography from './elements/NavigationTypography'
import NavigationUnorderedList from './elements/NavigationUnorderedList'
import NavigationList from './elements/NavigationList'
import NavigationLink from './elements/NavigationLink'

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
