import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import NavigationAppBar from './NavigationAppBar'
import NavigationToolbar from './NavigationToolbar'
import NavigationTypography from './NavigationTypography'
import NavigationUnorderedList from './NavigationUnorderedList'

const List = styled.li`
  font-weight: 600;
  display: inline;
  padding: 20px 5px;
`

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
            <List><StyledLink to="/">Kwizit</StyledLink></List>
          </NavigationTypography>
          <NavigationUnorderedList>
            <List><StyledLink to="/quizzes">Explore Quizzes</StyledLink></List>
            <List><StyledLink to="/users/signup">Sign Up</StyledLink></List>
            <List><StyledLink to="/users/signin">Sign In</StyledLink></List>
          </NavigationUnorderedList>
        </NavigationToolbar>
      </NavigationAppBar>
    )
  }
}

export default NavSignedOut
