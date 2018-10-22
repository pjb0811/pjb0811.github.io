import React from 'react'
import AppBar from '../organisms/AppBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import { loadCSS } from 'fg-loadcss/src/loadCSS'
import { withStyles } from '@material-ui/core/styles'
import Footer from '../organisms/Footer'
import 'typeface-roboto'
import './layout.css'
import Helmet from 'react-helmet'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#448AFF',
    },
  },
})

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    ...theme.mixins.toolbar,
    marginBottom: 10,
  },
})

class Layout extends React.Component {
  /* componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#___gatsby')
    )
  } */

  render() {
    const { children, classes } = this.props

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
              media="all"
            />
          </Helmet>
          <AppBar />
          <div className={classes.toolbar} />
          {children}
          <Footer />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default withStyles(styles)(Layout)
