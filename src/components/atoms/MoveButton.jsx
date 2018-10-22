import React, { Component } from 'react'
import { Link } from 'gatsby'

class Move extends Component {
  render() {
    const { direction, rel } = this.props
    if (!direction) {
      return null
    }
    return (
      <Link to={direction.fields.slug} rel={rel}>
        {direction.frontmatter.title}
      </Link>
    )
  }
}

export default Move
