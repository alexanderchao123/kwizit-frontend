import React, { Component } from 'react'
import { Toolbar, withStyles } from '@material-ui/core'

const styles = {
  root: {
    background: '#F46C02',
    boxShadow: '0 2px 2px -2px rgba(0,0,0,.5)',
  },
}

class NavigationToolbar extends Component {
  render() {
    const { classes } = this.props
    
    return(
      <Toolbar {...this.props}
        classes = {{
          root: classes.root
        }}
      />
    )
  }
}

export default withStyles(styles)(NavigationToolbar)
