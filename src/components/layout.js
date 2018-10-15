import React from 'react'
import AppBar from './AppBar'
import { Link } from 'gatsby'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Helmet from 'react-helmet'
import Grid from '@material-ui/core/Grid'
import 'typeface-roboto'
import './index.css'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar />
        {children}
      </MuiThemeProvider>
    )
  }
}

export default Template
