import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const StyledToolbar = styled(Toolbar)`
  background: #FF6F61;
`

const StyledTypography = styled(Typography)`
  flex: 1
`

const UnorderedList = styled.ul`
  float: right;
`

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
      <AppBar position="static">
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
      </AppBar>
    )
  }
}

export default NavSignedOut
