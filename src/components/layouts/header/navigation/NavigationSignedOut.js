import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import NavigationAppBar from './NavigationAppBar'
import NavigationToolbar from './NavigationToolbar'
import NavigationTypography from './NavigationTypography'
import NavigationUnorderedList from './NavigationUnorderedList'
import NavigationList from './NavigationList'

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

class NavSignedOut extends Component {
  render() {
    return(
      <NavigationAppBar position="static">
        <NavigationToolbar>
          <NavigationTypography>
            <NavigationList><StyledLink to="/">Kwizit</StyledLink></NavigationList>
          </NavigationTypography>
          <NavigationUnorderedList>
            <NavigationList>
              <StyledLink to="/quizzes">Explore Quizzes</StyledLink>
            </NavigationList>
            <NavigationList>
              <StyledLink to="/users/signup">Sign Up</StyledLink>
            </NavigationList>
            <NavigationList>
              <StyledLink to="/users/signin">Sign In</StyledLink>
            </NavigationList>
          </NavigationUnorderedList>
        </NavigationToolbar>
      </NavigationAppBar>
    )
  }
}

export default NavSignedOut
