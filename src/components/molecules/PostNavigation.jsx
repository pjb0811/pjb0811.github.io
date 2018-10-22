import React, { Component } from 'react'
import MoveButton from '../atoms/MoveButton'

class PostNavigation extends Component {
  render() {
    const { previous, next } = this.props

    return (
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          listStyle: 'none',
          padding: 0,
        }}
      >
        <li>
          <MoveButton direction={previous} rel="prev" />
        </li>
        <li>
          <MoveButton direction={next} rel="next" />
        </li>
      </ul>
    )
  }
}

export default PostNavigation
