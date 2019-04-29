import React, { Component, Fragment } from 'react'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '100%',
    height: '45px',
    margin: '5px 0px',
    border: '2px solid #7C5CFF',
    borderRadius: '0px',
    fontSize: '22px',
    fontWeight: '600',
    color: '#7C5CFF',
  }
}

class QuizAddQuestionButton extends Component {

  render() {
    const { classes } = this.props

    return(
      <Fragment>
        <Button {...this.props}
          classes={{
            root: classes.root
          }}
        />
      </Fragment>
    )
  }
}

export default withStyles(styles)(QuizAddQuestionButton)
