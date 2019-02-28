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

  fileHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.files[0]
    })
  }

  submitHandler = (event) => {
    event.preventDefault()

    let userInfo = this.userData()

    this.props.createUser(userInfo)
    .then(json => {
      localStorage.setItem("token", json.jwt)
      this.props.history.push("/users/dashboard")
    })
  }

  userData = () => {
    let userData = new FormData()
    userData.append("user[first_name]", this.state.first_name)
    userData.append("user[last_name]", this.state.last_name)
    userData.append("user[email]", this.state.email)
    userData.append("user[password]", this.state.password)
    userData.append("user[password_confirmation]", this.state.password_confirmation)
    userData.append("user[avatar]", this.state.avatar)
    return userData
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <div><input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} /></div>
          <div><input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} /></div>
          <div><input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} /></div>
          <div><input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} /></div>
          <div><input type="password" name="password_confirmation" placeholder="Password Confirmation" value={this.state.password_confirmation} onChange={this.changeHandler} /></div>
          <div><input type="file" name="avatar" placeholder="Avatar" onChange={this.fileHandler}/></div>
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
