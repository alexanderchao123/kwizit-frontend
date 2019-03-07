import React, { Component, Fragment } from 'react'

class ChoiceNew extends Component {
  changeHandler = (event) => {
    this.props.choiceChangeHandler(event, this.props.questionIndex, this.props.choiceIndex)
  }

  render() {
    return(
      <Fragment>
        <div><input type="text" name="answer" value={this.props.answer} placeholder="Answer" onChange={this.changeHandler}/></div>
        <div><input type="checkbox" name="correct" checked={this.props.correct} onChange={this.changeHandler}/>Correct</div>
      </Fragment>
    )
  }
}

export default ChoiceNew
