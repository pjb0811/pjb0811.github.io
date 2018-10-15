import React from 'react'
import AppBar from './AppBar'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>
        {/* {header} */}
        <AppBar />
        {children}
      </div>
    )
  }
}

export default Template
