import React, { Component } from 'react';
import { StyledAppBar, StyledToolbar, StyledTypography, UnorderedList, List, StyledLink} from './NavigationStyled'

class NavSignedOut extends Component {
  render() {
    return(
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledTypography>
            <List><StyledLink to="/">Kwizit</StyledLink></List>
          </StyledTypography>
          <UnorderedList>
            <List><StyledLink to="/quizzes">Explore Quizzes</StyledLink></List>
            <List><StyledLink to="/users/signup">Sign Up</StyledLink></List>
            <List><StyledLink to="/users/signin">Sign In</StyledLink></List>
          </UnorderedList>
        </StyledToolbar>
      </StyledAppBar>
    )
  }
}

export default NavSignedOut
