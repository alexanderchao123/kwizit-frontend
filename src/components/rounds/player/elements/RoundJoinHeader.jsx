import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  color: #7C5CFF;
  margin-bottom: 25px;
  font-size: 35px;
`

class RoundJoinHeader extends Component {
  render() {
    return(
      <Fragment>
        <StyledHeader {...this.props}/>
      </Fragment>
    )
  }
}

export default RoundJoinHeader
