import React, { Component } from 'react'
import { Link } from 'gatsby'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

class ButtonAppBar extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link
                to={'/'}
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                pjb0811.github.io
              </Link>
            </Typography>
            <IconButton color="inherit">
              <a href="https://github.com/pjb0811" style={{ color: 'inherit' }}>
                <Icon className={'fab fa-github'} />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a href="mailto:pjb0811@gmail.com" style={{ color: 'inherit' }}>
                <Icon className={'far fa-envelope'} />
              </a>
            </IconButton>
            <IconButton color="inherit">
              <a href="/rss.xml" style={{ color: 'inherit' }}>
                <Icon className={'fas fa-rss'} />
              </a>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonAppBar)
