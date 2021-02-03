import React from 'react'
import { HeaderNavbar, NavLink } from './styles'

const Navbar = props => {
  return (
    <>
      <HeaderNavbar>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Contact</NavLink>
        <NavLink to="/">Blog</NavLink>
      </HeaderNavbar>
    </>
  )
}

export default Navbar
