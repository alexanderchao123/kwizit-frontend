import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions/UserActions';
import { StyledAppBar, StyledToolbar, StyledTypography, UnorderedList, List, StyledLink} from './NavigationStyled'

class NavSignedIn extends Component {
  clickHandler = (event) => {
    this.props.removeUser()
    localStorage.removeItem("token")
  }

  render() {
    return(
      <StyledAppBar position="static">
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
      </StyledAppBar>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeUser())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NavSignedIn))
