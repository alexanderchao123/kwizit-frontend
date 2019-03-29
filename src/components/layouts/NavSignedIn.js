import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions/UserActions';
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Nav = styled.nav`
  background: #FF6F61;
  padding: 20px 0px;
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
      <AppBar position="static">
        <ToolBar>
          <Typography>
            <NavLink to="/"><List>Kwizit</List></NavLink>
          </Typography>
          <UnorderedList>
          <NavLink to="/quizzes"><List>Explore Quizzes</List></NavLink>
          <NavLink to="/quizzes/new"><List>Create Quiz</List></NavLink>
          <NavLink to="/rounds/join"><List>Join Game</List></NavLink>
          <NavLink to="/users/signout"><List onClick={this.clickHandler}>Sign Out</List></NavLink>
          </UnorderedList>
        </ToolBar>
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
