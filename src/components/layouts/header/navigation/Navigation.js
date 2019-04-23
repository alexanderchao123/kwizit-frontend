import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import NavigationSignedIn from './NavigationSignedIn';
import NavigationSignedOut from './NavigationSignedOut';

class Navigation extends Component {
  isSignedIn = () => this.props.user && this.props.isAuthenticated

  render() {
    return(
      <Fragment>
        {this.isSignedIn() ? <NavigationSignedIn/> : <NavigationSignedOut/>}
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

export default connect(mapStateToProps)(Navigation)
