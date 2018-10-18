import React, { Component, Fragment } from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'

class PostList extends Component {
  render() {
    const { posts } = this.props
    return (
      <Fragment>
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Fragment>
    )
  }
}

export default PostList
