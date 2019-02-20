import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/UserActions'

class UserNew extends Component {
  constructor() {
    super()
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: ""
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
    .then(json => {
      localStorage.setItem("token", json.jwt)
      this.props.history.push("/users/dashboard")
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitHandler}>
          <div><input type="text" name="first_name" placeholder="First Name" value={this.state.first_name} onChange={this.changeHandler} /></div>
          <div><input type="text" name="last_name" placeholder="Last Name" value={this.state.last_name} onChange={this.changeHandler} /></div>
          <div><input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.changeHandler} /></div>
          <div><input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} /></div>
          <div><input type="password" name="password_confirmation" placeholder="Password Confirmation" value={this.state.password_confirmation} onChange={this.changeHandler} /></div>
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

export default connect(null, mapDispatchToProps)(UserNew)
