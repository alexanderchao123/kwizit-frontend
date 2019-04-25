import React, { Component } from 'react'
import { AppBar, withStyles } from '@material-ui/core'

const styles = {
  root: {}
}

class NavigationAppBar extends Component {
  render() {
    const { classes } = this.props

    return(
      <AppBar {...this.props}
        classes={{
          root: classes.root
        }}
      />
    )
  }
}

export default withStyles(styles)(NavigationAppBar)
