import React, { Component } from 'react'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '100%',
    height: '45px',
    margin: '5px 0px',
    borderRadius: '0px',
    fontSize: '22px',
    fontWeight: '600',
    color: 'white',
    backgroundColor: '#7C5CFF',
    '&:hover': {
      backgroundColor: '#7C5CFF',
    },
  },
}

class RoundSubmitButton extends Component {
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

export default withStyles(styles)(RoundSubmitButton)
