import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../../store/actions/UserActions';
import UserBody from './elements/UserBody'
import UserFormWrapper from './elements/UserFormWrapper'
import UserForm from './elements/UserForm'
import UserHeader from './elements/UserHeader'
import UserInput from './elements/UserInput'
import UserSubmitButton from './elements/UserSubmitButton'

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
      <UserBody>
        <UserFormWrapper>
          <UserForm onSubmit={this.submitHandler}>
            <UserHeader>Sign In</UserHeader>
            <UserInput
              type="text"
              name="email"
              value={this.state.email}
              placeholder="Email"
              onChange={this.changeHandler}
            />
            <UserInput
              type="password"
              name="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.changeHandler}
            />
            <UserSubmitButton>Sign In</UserSubmitButton>
          </UserForm>
        </UserFormWrapper>
      </UserBody>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (userInfo) => dispatch(authenticateUser(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(UserSignIn)
