import React, { Component } from 'react'
import { InputBase, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '100%',
    height: `45px`,
    margin: '10px 0px',
    fontSize: '18px',
    border: '1px solid #7C5CFF',
    backgroundColor: 'white'
  },
  input: {
    height: '35px',
    padding: '5px 10px',
    backgroundColor: 'white',
  },
}

class UserInput extends Component {
  render() {
    return (
      <InputBase {...this.props}
        classes={{
          root: this.props.classes.root,
          input: this.props.classes.input
        }}
      />
    )
  }
}

export default withStyles(styles)(UserInput)
