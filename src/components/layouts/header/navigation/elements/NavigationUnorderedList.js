import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const StyledUnorderedList = styled.ul`
`

class NavigationUnorderedList extends Component {
  render() {
    return(
      <Fragment>
        <StyledUnorderedList {...this.props}/>
      </Fragment>
    )
  }

  componentDidMount() {
    console.log(this.props)
  }
}

export default NavigationUnorderedList
