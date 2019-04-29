import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`

class RoundJoinForm extends Component {
  render() {
    return(
      <Fragment>
        <StyledForm {...this.props}/>
      </Fragment>
    )
  }
}

export default RoundJoinForm
