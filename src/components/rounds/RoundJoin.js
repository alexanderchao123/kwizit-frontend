import React, { Component } from 'react'

class RoundJoin extends Component {
  constructor() {
    super()
    this.state = {
      pin: ""
    }
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <div><input type="text" name="pin" value={this.state.pin} placeholder="Pin" onChange={this.changeHandler}/></div>
        <div><button type="submit">Enter</button></div>
      </form>
    )
  }
}

export default RoundJoin
