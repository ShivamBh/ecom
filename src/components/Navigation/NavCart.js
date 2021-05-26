import React, { useContext } from 'react'
import { HeaderCart, CartCount, NavLink, CartLink } from './styles'
import reduce from 'lodash/reduce'
import StoreContext from '../../context/StoreContext'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const NavCart = props => {
  const [hasItems, quantity] = useQuantity()
  return (
    <>
      <HeaderCart>
        <CartLink to="/cart">Cart</CartLink>
        <CartLink to="/cart">
          <CartCount>{hasItems ? quantity : 0}</CartCount>
        </CartLink>
      </HeaderCart>
    </>
  )
}

export default NavCart
