import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/UserActions'
import { Button, withStyles } from '@material-ui/core'
import UserBody from './elements/UserBody'
import UserFormWrapper from './elements/UserFormWrapper'
import UserForm from './elements/UserForm'
import UserHeader from './elements/UserHeader'
import UserInput from './elements/UserInput'
import UserSubmitButton from './elements/UserSubmitButton'

const styles = {
  root: {
    width: '100%',
    height: '45px',
    margin: '5px 0px',
    border: '2px solid #7C5CFF',
    borderRadius: '0px',
    fontSize: '22px',
    fontWeight: '600',
    color: '#7C5CFF',
  },
  input: {
    display: 'none',
  },
}

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
      <UserBody>
        <UserFormWrapper>
          <UserForm onSubmit={this.submitHandler}>
            <UserHeader>Sign Up</UserHeader>
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
              className={this.props.classes.input}
              multiple
              type="file"
              onChange={this.fileChangeHandler}
            />
            <label htmlFor="outlined-button-file">
              <Button className={this.props.classes.root} variant="outlined" component="span">
                Upload Avatar
              </Button>
            </label>
            <UserSubmitButton>Sign Up</UserSubmitButton>
          </UserForm>
        </UserFormWrapper>
      </UserBody>
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
