import React from 'react'
import AppBar from '../organisms/AppBar'
import { Link } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid'
import 'typeface-roboto'
import './layout.css'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar />
        {children}
      </MuiThemeProvider>
    )
  }
}

export default Layout
