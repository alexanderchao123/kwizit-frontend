import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions/UserActions';
import styled from 'styled-components'

const Nav = styled.nav`
  background: #FF6F61;
  padding: 20px 0px;

  @media (max-width: 700px) {
    background: palevioletred;
  }
`

const UnorderedList = styled.ul`
  float: right;
`

const List = styled.li`
  color: white;
  font-weight: 600;
  display: inline;
  padding: 20px 5px;
`

const NavLink = styled(Link)`
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
        <NavLink to="/"><List>Kwizit</List></NavLink>
        <UnorderedList>
          <NavLink to="/quizzes"><List>Explore Quizzes</List></NavLink>
          <NavLink to="/quizzes/new"><List>Create Quiz</List></NavLink>
          <NavLink to="/rounds/join"><List>Join Game</List></NavLink>
          <NavLink to="/users/signout"><List onClick={this.clickHandler}>Sign Out</List></NavLink>
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
