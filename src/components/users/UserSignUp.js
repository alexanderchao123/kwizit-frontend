import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/UserActions'
import { Button, withStyles } from '@material-ui/core'
import styled from 'styled-components'
import UserInput from './UserInput'
import UserSubmitButton from './UserSubmitButton'

const styles = {
  rootButtonUpload: {
    width: '100%',
    fontSize: '20px',
    fontWeight: '600',
    color: '#7C5CFF',
    border: '2px solid #7C5CFF',
    margin: '10px 0px',
  },
  inputButtonUpload: {
    display: 'none',
  },
}

const SignUpBody = styled.div`
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

class UserSignUp extends Component {
  constructor() {
    super()
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      avatar: ""
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  fileChangeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.files[0]
    })
  }

  userFormData = () => {
    let userFormData = new FormData()
    Object.keys(this.state).forEach((keyName) => {
      userFormData.append(`user[${keyName}]`, this.state[keyName])
    })
    return userFormData
  }

  submitHandler = (event) => {
    event.preventDefault()
    let userInfo = this.userFormData()
    this.props.createUser(userInfo)
    .then(json => {
      localStorage.setItem("token", json.jwt)
      this.props.history.push("/users/dashboard")
    })
  }

  render() {
    return(
      <SignUpBody>
        <FormWrapper>
          <StyledForm onSubmit={this.submitHandler}>
            <StyledHeader>Sign Up</StyledHeader>
            <UserInput
              name="first_name"
              placeholder="First Name"
              value={this.state.first_name}
              onChange={this.changeHandler}
            />
            <UserInput
              name="last_name"
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={this.changeHandler}
            />
            <UserInput
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
            <UserInput
              name="password"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
            <UserInput
              name="password_confirmation"
              placeholder="Password Confirmation"
              type="password"
              value={this.state.password_confirmation}
              onChange={this.changeHandler}
            />
            <input
              name="avatar"
              accept="image/*"
              id="outlined-button-file"
              className={this.props.classes.inputButtonUpload}
              multiple
              type="file"
              onChange={this.fileChangeHandler}
            />
            <label htmlFor="outlined-button-file">
              <Button classes={{root: this.props.classes.rootButtonUpload}} variant="outlined" component="span">
                Upload Avatar
              </Button>
            </label>
            <UserSubmitButton>Sign Up</UserSubmitButton>
          </StyledForm>
        </FormWrapper>
      </SignUpBody>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userInfo) => dispatch(createUser(userInfo))
  }
}

// const styledUserSignUp = withStyles(styles)(UserSignUp)

export default connect(null, mapDispatchToProps)(withStyles(styles)(UserSignUp))
