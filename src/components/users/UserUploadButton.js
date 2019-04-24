import React, { Component, Fragment } from 'react'
import { Button, withStyles } from '@material-ui/core'

const styles = {
  root: {
    width: '100%',
    height: '45px',
    margin: '10px 0px',
    fontSize: '18px',
    fontWeight: '600',
    border: '2px solid #7C5CFF',
    borderRadius: '0px',
    color: '#7C5CFF',
  },
  input: {
    display: 'none',
  },
}

class UserUploadButton extends Component {
  render() {
    return(
      <Fragment>
        <input
          name="avatar"
          accept="image/*"
          id="outlined-button-file"
          className={this.props.classes.input}
          multiple
          type="file"
        />
        <label htmlFor="outlined-button-file">
          <Button
            variant="outlined"
            component="span"
            className={this.props.classes.root}
          >
            {this.props.title}
          </Button>
        </label>
      </Fragment>
    )
  }
}

export default withStyles(styles)(UserUploadButton)
