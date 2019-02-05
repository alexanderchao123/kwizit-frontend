import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDashboard extends Component {
  render() {
    return(
      <div>
        <h1>User Dashboard</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps)(UserDashboard)
