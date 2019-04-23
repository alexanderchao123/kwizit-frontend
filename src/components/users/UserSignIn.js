import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticateUser } from '../../store/actions/UserActions';
import styled from 'styled-components'
import UserInput from './UserInput'
import UserSubmitButton from './UserSubmitButton'

const SignInBody = styled.div`
  width: 100%;
  height: 100%;
  background: #FFF1E6;
`

const FormWrapper = styled.div`
  width: 350px;
  height: 500px;
  margin: auto;
  padding: 50px 0px;
  display: table;
`

const StyledForm = styled.form`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`

const StyledHeader = styled.h1`
  color: #7C5CFF;
  margin-bottom: 25px;
  font-size: 40px;
`

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
      <SignInBody>
        <FormWrapper>
          <StyledForm onSubmit={this.submitHandler}>
            <StyledHeader>Log In</StyledHeader>
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
          </StyledForm>
        </FormWrapper>
      </SignInBody>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (userInfo) => dispatch(authenticateUser(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(UserSignIn)
