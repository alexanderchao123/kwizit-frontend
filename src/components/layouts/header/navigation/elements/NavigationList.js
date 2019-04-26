import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledList = styled.li`
  font-weight: 600;
  display: inline;
  padding: 20px 5px;
`

class NavigationList extends Component {
  render() {
    return(
      <Fragment>
        <StyledList {...this.props}/>
      </Fragment>
    )
  }
}

export default NavigationList
