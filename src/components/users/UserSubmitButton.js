import React, { Component } from 'react'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '100%',
    fontSize: '20px',
    fontWeight: '600',
    color: 'white',
    margin: '10px 0px',
    borderRadius: '0px',
    backgroundColor: '#7C5CFF',
    '&:hover': {
      backgroundColor: '#7C5CFF',
    },
  },
}

class UserSubmitButton extends Component {
  render() {
    return(
      <Button {...this.props}
        type="submit"
        classes={{root: this.props.classes.root}}
      />
    )
  }
}

export default withStyles(styles)(UserSubmitButton)
