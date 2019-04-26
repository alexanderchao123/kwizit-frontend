import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledFormWrapper = styled.div`
  width: 350px;
  height: 500px;
  margin: auto;
  padding: 50px 0px;
  display: table;
`

class UserFormWrapper extends Component {
  render() {
    return(
      <Fragment>
        <StyledFormWrapper {...this.props}/>
      </Fragment>
    )
  }
}

export default UserFormWrapper
