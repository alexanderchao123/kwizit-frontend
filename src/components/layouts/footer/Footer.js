import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background-color: #F46C02;
  width: 100%;
  height: 50px;
`

class Footer extends Component {
  render() {
    return(
      <Fragment>
        <StyledFooter></StyledFooter>
      </Fragment>
    )
  }
}

export default Footer
