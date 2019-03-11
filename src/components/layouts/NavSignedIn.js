import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../../store/actions/UserActions';

class NavSignedIn extends Component {
  clickHandler = (event) => {
    this.props.removeUser()
    localStorage.removeItem("token")
  }

  render() {
    return(
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/quizzes"><li>Explore Quizzes</li></Link>
          <Link to="/quizzes/new"><li>Create Quiz</li></Link>
          <Link to="/rounds/join"><li>Join Game</li></Link>
          <Link to="/users/signout"><li onClick={this.clickHandler}>Sign Out</li></Link>
        </ul>
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeUser())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(NavSignedIn))
