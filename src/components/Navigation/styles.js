import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import TransitionLink from 'gatsby-plugin-transition-link'

export const HeaderWrapper = styled.div`
  height: 4.8vw;
  padding: 0 7.5vw;
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100000;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1.45rem;
  margin: 0 auto;
  max-width: 960px;
`

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: black;
`

export const CartCounter = styled.span`
  background-color: black;
  color: white;
  border-radius: 1rem;
  padding: 0 10px;
  font-size: 0.875rem;
  float: right;
  margin: -10px;
  z-index: 20;
`
export const HeaderBranding = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 1.2vw;
  text-decoration: none;
  font-spacing: 1rem;
  color: black;
`

export const HeaderNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1vw;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 0.7vw;
  color: black;
  font-weight: 400;
`

export const HeaderActions = styled.div``

export const HeaderCart = styled.div`
  font-size: 1vw;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`

export const CartLink = styled(Link)`
  font-weight: 700;
  font-size: 1vw;
  text-decoration: none;
  color: black;
`

export const CartCount = styled.button`
  height: 2vw;
  width: 2vw;
  border-radius: 50%;
  border: 1px solid black;
  margin-left: 0.7vw;
  vertical-align: center;
  text-align: center;
  background: black;
  color: yellow;
  font-weight: 700;
`
