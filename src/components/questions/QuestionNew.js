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
    let choices = this.props.question.choices_attributes.map((choice, index) => {
      return <ChoiceNew key={index} choiceIndex={index} questionIndex={this.props.index} choice={choice} choiceChangeHandler={this.props.choiceChangeHandler}/>
    })

    return(
      <Fragment>
        <h4>Question {this.props.index + 1}</h4>
        <div><input type="text" name="title" value={this.props.title} placeholder="Title" onChange={this.changeHandler}/></div>
        <div><input type="text" name="difficulty" value={this.props.difficulty} placeholder="Difficulty" onChange={this.changeHandler}/></div>
        <div><input type="text" name="time" value={this.props.time} placeholder="Time" onChange={this.changeHandler}/></div>
        {choices}
        <div><button type="button" onClick={this.clickHandler}>Delete Question</button></div>
      </Fragment>
    )
  }
}

export default QuestionNew
