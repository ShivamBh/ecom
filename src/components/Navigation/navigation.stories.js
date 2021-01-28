import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export default {
  title: 'header',
}

export const TestHeader = () => {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => <h1>{data.site.siteMetadata.title}</h1>}
    />
  )
}
