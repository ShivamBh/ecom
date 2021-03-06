import React, { useContext } from 'react'
import reduce from 'lodash/reduce'
import PropTypes from 'prop-types'

import StoreContext from '~/context/StoreContext'
import Navbar from './Navbar'
import NavActions from './NavActions'
import Branding from './Branding'
import {
  CartCounter,
  Container,
  MenuLink,
  HeaderWrapper,
  HeaderBranding,
  HeaderNavbar,
  HeaderActions,
} from './styles'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const Navigation = ({ siteTitle }) => {
  const [hasItems, quantity] = useQuantity()

  return (
    <HeaderWrapper>
      <Branding></Branding>
      <Navbar></Navbar>
      <NavActions />
    </HeaderWrapper>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation
