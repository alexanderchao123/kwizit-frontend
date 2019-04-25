import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { removeUser } from '../../../../store/actions/UserActions';
import NavigationAppBar from './NavigationAppBar'
import NavigationToolbar from './NavigationToolbar'
import NavigationTypography from './NavigationTypography'


const UnorderedList = styled.ul`
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
      <NavigationAppBar position="static">
        <NavigationToolbar>
          <NavigationTypography>
            <List><StyledLink to="/">Kwizit</StyledLink></List>
          </NavigationTypography>
          <UnorderedList>
            <List><StyledLink to="/quizzes">Explore Quizzes</StyledLink></List>
            <List><StyledLink to="/quizzes/new">Create Quiz</StyledLink></List>
            <List><StyledLink to="/rounds/join">Join Game</StyledLink></List>
            <List onClick={this.clickHandler}><StyledLink to="/users/signout">Sign Out</StyledLink></List>
          </UnorderedList>
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
