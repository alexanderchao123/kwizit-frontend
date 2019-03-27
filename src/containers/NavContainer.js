import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NavSignedIn from '../components/layouts/NavSignedIn';
import NavSignedOut from '../components/layouts/NavSignedOut';

class NavContainer extends Component {
  isSignedIn = () => this.props.user && this.props.isAuthenticated

  render() {
    return(
      <Fragment>
        {this.isSignedIn() ? <NavSignedIn/> : <NavSignedOut/>}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userInfo.user,
    isAuthenticated: state.userInfo.isAuthenticated
  }
}

export default connect(mapStateToProps)(NavContainer)
