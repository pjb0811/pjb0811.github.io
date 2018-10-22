import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    background: theme.palette.grey['100'],
    justifyContent: 'center',
  },
  caption: {
    textAlign: 'center',
  },
})

class Footer extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.toolbar}>
          <Typography
            variant="caption"
            color="inherit"
            className={classes.caption}
          >
            Copyright © 2018. pjb0811 All rights reserved.
          </Typography>
          <Typography
            variant="caption"
            color="inherit"
            className={classes.caption}
          >
            Powered by Gatsby.js
          </Typography>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
