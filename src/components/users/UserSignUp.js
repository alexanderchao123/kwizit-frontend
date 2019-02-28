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
    debugger
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
    .then(json => {
      localStorage.setItem("token", json.jwt)
      this.props.history.push("/users/dashboard")
    })

    let formData = new FormData()
    formData.append("user[first_name]", this.state.first_name)
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
          <div><input type="file" name="avatar" placeholder="Avatar" value={this.state.avatar} onChange={this.changeHandler}/></div>
          <div><button type="submit">Sign Up</button></div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  }
}

export default connect(null, mapDispatchToProps)(UserSignUp)
