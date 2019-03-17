import React, { Component } from 'react'
import { connect } from 'react-redux'
import { renderChoiceBlock, renderRanking } from '../../../store/actions/RoundActions'

class RoundScoreboard extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  clickHandler = (event) => {
    let roundPin = this.props.match.params.pin
    if (this.state.count > 0) {
      this.props.renderChoiceBlock(this.props.subscription)
      this.props.history.push(`/rounds/host/${roundPin}/questionblock`)
    } else {
      this.props.renderRanking(this.props.subscription)
      this.props.history.push(`/rounds/host/${roundPin}/gameover`)
    }
  }

  getCount = () => {
    let roundPin = this.props.match.params.pin
    let token = localStorage.getItem("token")
    fetch(`http://localhost:3000/api/v1/rounds/${roundPin}/count`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(json => this.setState({count: json.count}))
  }

  render() {
    return(
      <div>
        <h1>Scoreboard</h1>
        <button type="button" onClick={this.clickHandler}>Next</button>
      </div>
    )
  }

  componentDidMount() {
    this.getCount()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderChoiceBlock: (subscription) => dispatch(renderChoiceBlock(subscription)),
    renderRanking: (subscription) => dispatch(renderRanking(subscription))
  }
}

export default connect(null, mapDispatchToProps)(RoundScoreboard)
