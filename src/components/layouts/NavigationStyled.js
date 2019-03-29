import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export const StyledAppBar = styled(AppBar)`
`

export const StyledToolbar = styled(Toolbar)`
  background: #FF6F61;
  // background: #FF9085;
`

export const StyledTypography = styled(Typography)`
  flex: 1
`

export const UnorderedList = styled.ul`
  float: right;
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
