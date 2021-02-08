import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'

const TLink = props => (
  <TransitionLink
    to={props.to}
    entry={props.entry}
    exit={props.exit}
    trigger={props.trigger}
  >
    {props.children}
  </TransitionLink>
)

export default TLink
