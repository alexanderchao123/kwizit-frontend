import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export const StyledAppBar = styled(AppBar)`
`

export const StyledToolbar = styled(Toolbar)`
  background: #F46C02;
  box-shadow: 0 2px 2px -2px rgba(0,0,0,.5);
`

export const StyledTypography = styled(Typography)`
  flex: 1
`

export const UnorderedList = styled.ul`
`

export const List = styled.li`
  font-weight: 600;
  display: inline;
  padding: 20px 5px;
`

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
