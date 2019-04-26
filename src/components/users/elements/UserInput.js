import React, { Component } from 'react'
import { InputBase, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '100%',
    height: `45px`,
    margin: '5px 0px',
    fontSize: '18px',
    backgroundColor: 'white'
  },
  input: {
    height: '33px',
    padding: '5px 10px',
    border: '1px solid #7C5CFF',
    backgroundColor: 'white',
  },
}

class UserInput extends Component {
  render() {
    const { classes } = this.props

    return (
      <InputBase {...this.props}
        classes={{
          root: classes.root,
          input: classes.input
        }}
      />
    )
  }
}

export default withStyles(styles)(UserInput)
