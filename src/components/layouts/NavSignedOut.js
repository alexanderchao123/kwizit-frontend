import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavSignedOut extends Component {
  render() {
    return(
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/quizzes"><li>Explore Quizzes</li></Link>
          <Link to="/signup"><li>Sign Up</li></Link>
          <Link to="/users/signin"><li>Sign In</li></Link>
        </ul>
      </nav>
    )
  }
}

export default NavSignedOut
