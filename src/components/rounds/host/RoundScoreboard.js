import React, { Component } from 'react'
import { connect } from 'react-redux'
import { renderChoiceBlock, renderRanking } from '../../../store/actions/RoundHostActions'

class RoundScoreboard extends Component {
  clickHandler = (event) => {
    this.getQuestionCount()
    .then(json => {
      let roundPin = this.props.round.pin
      if (json.count > 0) {
        this.props.renderChoiceBlock(this.props.subscription)
        this.props.history.push(`/rounds/host/${roundPin}/questionblock`)
      } else {
        this.props.renderRanking(this.props.subscription)
        this.props.history.push(`/rounds/host/${roundPin}/gameover`)
      }
    })
  }

  getQuestionCount = () => {
    let roundPin = this.props.round.pin
    let token = localStorage.getItem("token")
    return fetch(`http://localhost:3000/api/v1/rounds/${roundPin}/question_count`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
  }

  render() {
    return(
      <div>
        <h1>Scoreboard</h1>
        <button type="button" onClick={this.clickHandler}>Next</button>
      </div>
    )
  }

  componentDidMount() {}
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
