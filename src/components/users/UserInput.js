import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { InputBase, withStyles } from '@material-ui/core'

const styles = {
  root: {
    backgroundColor: 'gray',
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    margin: '10px',
  },
}

class UserInput extends Component {
  render() {
    return (
      <InputBase classes={{
        root: this.props.classes.root,
        input: this.props.classes.input
      }}/>
    )
  }
}

// UserInput.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(UserInput)
