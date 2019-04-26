import React, { Component } from 'react'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '100%',
    height: '45px',
    margin: '5px 0px',
    fontSize: '18px',
    fontWeight: '600',
    borderRadius: '0px',
    color: 'white',
    backgroundColor: '#7C5CFF',
    '&:hover': {
      backgroundColor: '#7C5CFF',
    },
  },
}

class UserSubmitButton extends Component {
  render() {
    const { classes } = this.props

    return(
      <Button {...this.props}
        type="submit"
        classes={{
          root: classes.root
        }}
      />
    )
  }
}

export default withStyles(styles)(UserSubmitButton)
