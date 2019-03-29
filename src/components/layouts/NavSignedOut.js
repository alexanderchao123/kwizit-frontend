import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  /* background-color: #FF6F61; */
`

const List = styled.li`
  display: inline;
`

class NavSignedOut extends Component {
  render() {
    return(
      <Nav>
        <ul>
          <Link to="/"><List>Home</List></Link>
          <Link to="/quizzes"><List>Explore Quizzes</List></Link>
          <Link to="/users/signup"><List>Sign Up</List></Link>
          <Link to="/users/signin"><List>Sign In</List></Link>
        </ul>
      </Nav>
    )
  }
}

export default NavSignedOut
