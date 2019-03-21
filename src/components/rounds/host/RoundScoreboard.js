import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authenticateRound, renderChoiceBlock, renderRanking } from '../../../store/actions/RoundHostActions'

class RoundScoreboard extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  clickHandler = (event) => {
    let roundPin = this.props.round.pin
    if (this.state.count > 0) {
      this.props.renderChoiceBlock(this.props.subscription)
      this.props.history.push(`/rounds/host/${roundPin}/questionblock`)
    } else {
      this.props.renderRanking(this.props.subscription)
      this.props.history.push(`/rounds/host/${roundPin}/gameover`)
    }
  }

  getCount = () => {
    // because this is called in componentDidMount, the state is still not set by the parent WIP
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

const mapStateToProps = (state) => {
  return {
    round: state.roundHostInfo.round
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    renderChoiceBlock: (subscription) => dispatch(renderChoiceBlock(subscription)),
    renderRanking: (subscription) => dispatch(renderRanking(subscription))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundScoreboard)
