import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/UserActions'

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
      <div>
        <form onSubmit={this.submitHandler}>
          <div><input type="text" name="first_name" value={this.state.first_name} placeholder="First Name" onChange={this.changeHandler} /></div>
          <div><input type="text" name="last_name" value={this.state.last_name} placeholder="Last Name" onChange={this.changeHandler} /></div>
          <div><input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.changeHandler} /></div>
          <div><input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.changeHandler} /></div>
          <div><input type="password" name="password_confirmation" value={this.state.password_confirmation} placeholder="Password Confirmation" onChange={this.changeHandler} /></div>
          <div><input type="file" name="avatar" placeholder="Avatar" onChange={this.fileChangeHandler}/></div>
          <div><button type="submit">Sign Up</button></div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userInfo) => dispatch(createUser(userInfo))
  }
}

export default connect(null, mapDispatchToProps)(UserSignUp)
