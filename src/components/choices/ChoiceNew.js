import React, { Component, Fragment } from 'react'

class ChoiceNew extends Component {
  render() {
    return(
      <Fragment>
        <div><input type="text" name="answer" placeholder="Answer" value={this.props.answer}/></div>
        <div><input type="text" name="correct" placeholder="Correct" value={this.props.correct}/></div>
      </Fragment>
    )
  }
}

export default ChoiceNew
