import React, { Component } from 'react'
import { Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    flex: '1',
  },
}

class NavigationTypography extends Component {
  render() {
    const { classes } = this.props
    
    return(
      <Typography {...this.props}
        classes = {{
          root: classes.root
        }}
      />
    )
  }
}

export default withStyles(styles)(NavigationTypography)
