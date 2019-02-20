import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../../store/actions/UserActions';

class UserSignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.authenticateUser(this.state)
    .then(json => {
      localStorage.setItem("token", json.jwt)
      this.props.history.push("/users/dashboard")
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <div><input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} /></div>
          <div><input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} /></div>
          <div><button type="submit">Sign In</button></div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (userInfo) => dispatch(authenticateUser(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(UserSignIn)
