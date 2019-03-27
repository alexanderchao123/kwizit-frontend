import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions/UserActions';
import styled from 'styled-components'

const Nav = styled.nav`
  background-color: #FF6F61;
`

const List = styled.li`
  display: inline;
  margin: 5px 5px;
`

class NavSignedIn extends Component {
  clickHandler = (event) => {
    this.props.removeUser()
    localStorage.removeItem("token")
  }

  render() {
    return(
      <Nav>
        <ul>
          <Link to="/"><List>Home</List></Link>
          <Link to="/quizzes"><List>Explore Quizzes</List></Link>
          <Link to="/quizzes/new"><List>Create Quiz</List></Link>
          <Link to="/rounds/join"><List>Join Game</List></Link>
          <Link to="/users/signout"><List onClick={this.clickHandler}>Sign Out</List></Link>
        </ul>
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
