import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledBody = styled.div`
  width: 100%;
  /* height: 100%; */
  min-height: 100%;
  background: #FFF1E6;
`

class UserBody extends Component {
  render() {
    return(
      <Fragment>
        <StyledBody {...this.props}/>
      </Fragment>
    )
  }
}

export default UserBody
