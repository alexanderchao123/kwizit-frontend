import React, { Component, Fragment } from 'react'

class QuestionNew extends Component {
  changeHandler = (event) => {
    this.props.questionChangeHandler(event, this.props.index)
  }

  render() {
    return(
      <Fragment>
        <div><input type="text" name="title" placeholder="Title" value={this.props.title} onChange={this.changeHandler}/></div>
        <div><input type="text" name="difficulty" placeholder="Difficulty" value={this.props.difficulty} onChange={this.changeHandler}/></div>
        <div><input type="text" name="time" placeholder="Time" value={this.props.time} onChange={this.changeHandler}/></div>
      </Fragment>
    )
  }
}

export default QuestionNew
