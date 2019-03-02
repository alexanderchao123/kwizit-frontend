import React, { Component, Fragment } from 'react'
import ChoiceNew from '../choices/ChoiceNew'

class QuestionNew extends Component {
  changeHandler = (event) => {
    this.props.questionChangeHandler(event, this.props.index)
  }

  clickHandler = (event) => {
    this.props.removeQuestion(event, this.props.index)
  }

  render() {
    let choices = this.props.question.choice_attributes.map((choice, index) => {
      return <ChoiceNew key={index} index={index} choice={choice}/>
    })

    return(
      <Fragment>
        <h4>Question {this.props.index + 1}</h4>
        <div><input type="text" name="title" placeholder="Title" value={this.props.title} onChange={this.changeHandler}/></div>
        <div><input type="text" name="difficulty" placeholder="Difficulty" value={this.props.difficulty} onChange={this.changeHandler}/></div>
        <div><input type="text" name="time" placeholder="Time" value={this.props.time} onChange={this.changeHandler}/></div>
        {choices}
        <button type="button" onClick={this.clickHandler}>Delete Question</button>
      </Fragment>
    )
  }
}

export default QuestionNew
