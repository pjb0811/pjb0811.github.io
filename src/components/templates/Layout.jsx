import React from 'react'
import AppBar from '../organisms/AppBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import { loadCSS } from 'fg-loadcss/src/loadCSS'
import { withStyles } from '@material-ui/core/styles'
import Footer from '../organisms/Footer'
import 'typeface-roboto'
import './layout.css'
import Helmet from 'react-helmet'
import CssBaseline from '@material-ui/core/CssBaseline'
import { TypographyStyle } from 'react-typography'
import typography from '../../utils/typography'

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
        <CssBaseline />
        <div className={classes.root}>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
              media="all"
            />

            <TypographyStyle typography={typography} />
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
