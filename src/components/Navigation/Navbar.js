import React from 'react'
import { HeaderNavbar, NavLink } from './styles'
import TLink from '../TransitionLink'
import { animateObjects, newContent } from '../../utils/transitions'

const Navbar = props => {
  return (
    <>
      <HeaderNavbar>
        <TLink
          exit={{
            length: 0.6,
            trigger: ({ exit, e, node }) => animateObjects(exit, node),
          }}
          entry={{
            delay: 0.5,
            length: 0.6,
            trigger: ({ entry, node }) => newContent(node),
          }}
          to="/"
        >
          Shop
        </TLink>
        <TLink
          exit={{
            length: 0.6,
            trigger: ({ exit, e, node }) => animateObjects(exit, node),
          }}
          entry={{
            delay: 0.5,
            length: 0.6,
            trigger: ({ entry, node }) => newContent(node),
          }}
          to="/"
        >
          About
        </TLink>
        <TLink
          exit={{
            length: 0.6,
            trigger: ({ exit, e, node }) => animateObjects(exit, node),
          }}
          entry={{
            delay: 0.5,
            length: 0.6,
            trigger: ({ entry, node }) => newContent(node),
          }}
          to="/"
        >
          Contact
        </TLink>
        <TLink
          exit={{
            length: 0.6,
            trigger: ({ exit, e, node }) => animateObjects(exit, node),
          }}
          entry={{
            delay: 0.5,
            length: 0.6,
            trigger: ({ entry, node }) => newContent(node),
          }}
          to="/"
        >
          Blog
        </TLink>
        {/* <TLink exit={exitTransition} entry={entryTransition} to="/">
          About
        </TLink>
        <TLink exit={exitTransition} entry={entryTransition} to="/">
          Contact
        </TLink>
        <TLink exit={exitTransition} entry={entryTransition} to="/">
          Blog
        </TLink> */}
      </HeaderNavbar>
    </>
  )
}

export default Navbar
