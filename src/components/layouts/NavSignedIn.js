import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions/UserActions';
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #FF6F61;
  height: 50px;
`

const UnorderedList = styled.ul`
  float: right;
`

const List = styled.li`
  color: white;
  font-weight: 500;
  display: inline;
  margin: 5px 5px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`


class NavSignedIn extends Component {
  clickHandler = (event) => {
    this.props.removeUser()
    localStorage.removeItem("token")
  }

  render() {
    return(
      <Nav>
        <StyledLink to="/"><List>Home</List></StyledLink>
        <UnorderedList>
          <StyledLink to="/quizzes"><List>Explore Quizzes</List></StyledLink>
          <StyledLink to="/quizzes/new"><List>Create Quiz</List></StyledLink>
          <StyledLink to="/rounds/join"><List>Join Game</List></StyledLink>
          <StyledLink to="/users/signout"><List onClick={this.clickHandler}>Sign Out</List></StyledLink>
        </UnorderedList>
      </Nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeUser())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NavSignedIn))
