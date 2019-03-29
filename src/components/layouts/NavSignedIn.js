import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions/UserActions';
import styled from 'styled-components'
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


class NavSignedIn extends Component {
  clickHandler = (event) => {
    this.props.removeUser()
    localStorage.removeItem("token")
  }

  render() {
    return(
      <AppBar position="static">
        <StyledToolbar>
          <StyledTypography>
            <List><StyledLink to="/">Kwizit</StyledLink></List>
          </StyledTypography>
          <UnorderedList>
            <List><StyledLink to="/quizzes">Explore Quizzes</StyledLink></List>
            <List><StyledLink to="/quizzes/new">Create Quiz</StyledLink></List>
            <List><StyledLink to="/rounds/join">Join Game</StyledLink></List>
            <List onClick={this.clickHandler}><StyledLink to="/users/signout">Sign Out</StyledLink></List>
          </UnorderedList>
        </StyledToolbar>
      </AppBar>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeUser())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NavSignedIn))
