import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const UnorderedList = styled.ul`
`

class NavigationUnorderedList extends Component {
  render() {
    return(
      <Fragment>
        <UnorderedList {...this.props}/>
      </Fragment>
    )
  }

  componentDidMount() {
    console.log(this.props)
  }
}

export default NavigationUnorderedList
